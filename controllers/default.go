package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (this *MainController) Get() {
	this.TplName = "index.html"
	this.Render()
}

func (this *MainController) UploadFiles() {
	this.SaveToFile("the_file","/Users/christopheroux/Downloads/upload_file.txt")
}
