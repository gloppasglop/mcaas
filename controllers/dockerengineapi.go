package controllers

import (
	"github.com/astaxie/beego"
    "fmt"
    "github.com/docker/engine-api/client"
    "github.com/docker/engine-api/types"
    "github.com/docker/engine-api/types/filters"
    "encoding/json"

)

/* It's a beego controller */
type DockerengineapiController struct {
	beego.Controller
}

/* Call docker-engine api */
func (this *DockerengineapiController) GetContainers() {
        cli, err := client.NewEnvClient()
        if err != nil {
            panic(err)
        }

    filters := filters.NewArgs()
    filters.Add("label", "com.gloppasglop.toto=mcaas")
    options := types.ContainerListOptions{
        All: true,
        Filter: filters,
    }
    containers, err := cli.ContainerList(options)
    if err != nil {
        panic(err)
    }

    res, err := json.Marshal(containers)
    fmt.Println(string(res))
    this.Data["json"] = string(res)
    this.ServeJSON()
}

