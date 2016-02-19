package routers

import (
	"github.com/astaxie/beego"
	"mcaas/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/containers", &controllers.MainController{})

	beego.Router("/dockerapi/containers/json", &controllers.DockerengineapiController{}, "get:GetContainers")
//	beego.Router("/dockerapi/info", &controllers.DockerengineapiController{}, "get:GetInfo")
}
