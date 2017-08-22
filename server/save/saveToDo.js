let mysql = require("mysql")

let express = require("express")

let app = express()

const db = "dbtest2"
const tb = "tb_test1"

/* 创建连接 */
let conn = mysql.createConnection({
	user: "root",
	password: ""
})

conn.connect()
	

app.get("/save/saveToDo", (req, res) => {
	// res.header("Access-control-Allow-Origin", "http://localhost:8888")
	res.header("Access-control-Allow-Origin", "*")
	let arrInfo = []

	/* 建数据库 */
	conn.query(
		"create database if not exists `dbtest2` default charset utf8;",
		function(err, results, fields){
			if(err){
				res.status = 500
				console.error(err)
			}else if(results){
				res.send(JSON.stringify({data:"database success"}))
			}
			conn.end()
		}
	)

	/* 建表 */
	/*conn.query("use "+db)
	conn.query(
	"create table if not exists `tb_to_do`(\
		id int(9) not null primary key auto_increment,\
		to_do_thing varchar(255),\
	    time int(20),\
		pre_column1 VARCHAR(255),\
		pre_column2 VARCHAR(255),\
		pre_column3 VARCHAR(255)) default charset utf8;",
		function(err, results, fields){
			if(err){
				res.status = 500
				console.error(err)
			}else if(results){
				res.send(JSON.stringify({data:"success"}))
			}
			conn.end()
		}
	)*/

	/* 查询 */
	/*conn.query(
		"select * from "+tb+" where id="+24,
		function(err, results, fields){
			if(err){
				console.error(err)
			}else if(results){
				let _l = results.length
				let obj = {}
				for(let i=0; i<_l; i++){
					obj.name = results[i].name
					obj.sex = results[i].sex
					obj.age = results[i].age
					arrInfo.push(obj)
					console.log("%s\t%s\t%s", results[i].name, results[i].sex, results[i].age)
					console.log(arrInfo)
				}
				res.send(JSON.stringify(arrInfo))
			}
			conn.end()
		}
	)*/
})





app.listen("8086")