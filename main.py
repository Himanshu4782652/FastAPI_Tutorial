from fastapi import FastAPI,Path,Query,Form,File,UploadFile
from unittest.util import _MAX_LENGTH
from enum import Enum
from typing import Union #it sends the blank value to the backend
from pydantic import BaseModel #used for request body / to build schema


class schema1(BaseModel):
 name:str
 Class:str
 roll_no:int

class Choice_Names(str,Enum):
    one = "one"
    two = "two"
    three = "three"

app = FastAPI()

@app.get("/hello")
async def root():
    return {"message": "Hello from himanshu's side...."}


@app.get("/hello1")
async def vipin():
    return {"message": "hi, how about you!!!"}


# path parameters
@app.get("/item/{Item}")
async def path_func(Item):
    var_name = {"path variable": Item}
    return var_name


# query parameters
# @app.get("/query")
# async def query_func(name: str,roll_no:int):
#     var_name={"name":name,"roll_no":roll_no}
#     return (var_name)



# query parameters with using Union
@app.get("/query")
async def query_func(name: Union[str, None] = None, roll_no: Union[str, None] = Query(default=None,min_length=3,max_length=4)):
    var_name = {"name": name, "roll_no": roll_no}
    return (var_name)



# using Enum
@app.get("/models/{model_name}")
async def get_model(model_name:Choice_Names):
 if model_name.value=="one":
  return {model_name:model_name,"message":"calling one"}
 if model_name.value=="two":
  return {model_name:model_name,"message":"calling two"}
 return {model_name:model_name,"message":"calling three"}



# request body
@app.post("/items/")
async def create_item(item:schema1):
    return item



# form data-1
# before storing form data you need to install-pip install python-multipart
# @app.post("/form/data")
# async def form_data(username: str = Form(), password: str = Form()):
#     return {"username": username, "password": password}

# form data-2
class himanshu(BaseModel):
 one:str
 two:str
 three:int
@app.post("/form/data")
async def form_data(items:himanshu):
 return ({"items":items})


# file upload--find out file length
@app.post("/file/upload")
async def file_byte_len(file: bytes=File()):
 return ({"file":len(file)})

@app.post("/upload/file")
async def file_upload(file:UploadFile):
 # return ({"file":file})
 return ({"file_name":file.filename,"file_content_name":file.content_type})

@app.post("/form/data/filedata")
async def formdata_uploadfile(file1:UploadFile,file2:bytes=File(),name:str=Form()):
 return ({"file_name":file1.filename,"file2_bytes":len(file2),"name":name})