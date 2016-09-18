package main

import (
	"github.com/astaxie/beego"
	_ "github.com/gloppasglop/mcaas/routers"
)

func main() {
	beego.Run()
}
