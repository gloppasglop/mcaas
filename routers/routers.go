package routers

import (
	"github.com/astaxie/beego"
	"github.com/gloppasglop/mcaas/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/containers", &controllers.MainController{})
	beego.Router("/containers/:id", &controllers.MainController{})

	beego.Router("/upload", &controllers.MainController{}, "post:UploadFiles")

	beego.Router("/dockerapi/containers/", &controllers.DockerengineapiController{}, "get:GetContainers")
	beego.Router("/dockerapi/containers/:id", &controllers.DockerengineapiController{}, "get:GetContainer")
	//	beego.Router("/dockerapi/info", &controllers.DockerengineapiController{}, "get:GetInfo")
}
