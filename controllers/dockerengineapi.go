package controllers

import (
	"github.com/astaxie/beego"
    "github.com/docker/engine-api/client"
    "github.com/docker/engine-api/types"
    "github.com/docker/engine-api/types/filters"
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
    filters.Add("label", "com.gloppasglop.minecraft=mcaas")
    options := types.ContainerListOptions{
        All: true,
        Filter: filters,
    }
    containers, err := cli.ContainerList(options)
    if err != nil {
        panic(err)
    }

    this.Data["json"] = containers
    this.ServeJSON()
}

/* Call docker-engine api */
func (this *DockerengineapiController) GetContainer() {
        cli, err := client.NewEnvClient()
        if err != nil {
            panic(err)
        }
    id := this.GetString(":id")

    container, err := cli.ContainerInspect(id)
    if err != nil {
        panic(err)
    }

    this.Data["json"] = container
    this.ServeJSON()
}
