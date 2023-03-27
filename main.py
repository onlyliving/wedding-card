#-*-coding:utf-8-*-
from typing import Union
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json

file_path = "./guestBook.json"

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://192.168.10.131:3000",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Guestbook(BaseModel):
    name: str
    content: str
    password: str


class DeleteGuestBook(BaseModel):
    id: int



@app.get("/api/read/guestbook")
def getGuestBook():
    with open(file_path, "r") as json_file:
            origin_data = json.load(json_file)
        
    return {
        "result": True,
        "data": origin_data
        }


@app.post("/api/create/guestbook")
async def postGuestBook(data: Guestbook):

    if data.name == "":
        raise HTTPException(status_code=400, detail="이름 입력값이 없습니다.")

    if data.content == "":
        raise HTTPException(status_code=400, detail="내용 입력값이 없습니다.")

    if data.password == "":
        raise HTTPException(status_code=400, detail="비밀번호 입력값이 없습니다.")

    else:
        # 파일 저장
        # file 폴더에 guestbook 파일이 없으면, 파일을 생성해서 값 넣기
        # file 폴더에 guestbook 파일이 있으면, 기존파일에 새로운 값 더하기

        with open(file_path, "r") as json_file:
            origin_data = json.load(json_file)

        newData = origin_data

        lastIndex = origin_data[-1]["id"] + 1,

        addDatas = {
            "id": lastIndex[0],
            "name": data.name,
            "content": data.content,
            "password": data.password
        }

        newData.append(addDatas)

        with open(file_path, 'w') as outfile:
            json.dump(newData, outfile, indent=4, ensure_ascii=False)

        return {"result": True, "data": data}


def filterData(id, origiData):
    result = []
    
    for i in origiData:
        if i["id"] != id:
            print(i["id"])
            print(id)
            result.append(i)

    

    return result;



@app.post("/api/delete/guestbook")
async def deleteGuestBook(reqData: DeleteGuestBook):

    with open(file_path, "r") as json_file:
            origin_data = json.load(json_file)

    updateData = filterData(reqData.id, origin_data)



    with open(file_path, 'w') as outfile:
        json.dump(updateData, outfile, indent=4, ensure_ascii=False)

    return {"result": True}