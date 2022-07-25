provider "aws" {
  region = "sa-east-1"
  access_key = ""
  secret_key = ""
}

resource "aws_instance" "InstanciaCloudDevopsTeam1" {
  ami = "ami-05e2b7014cc33b105"
  instance_type = "t2.micro"
  key_name = "terraform-key"
  security_groups = ["${aws_security_group.allow_rdp.name}"]
  tags = {   
    año = 2022
    so = ws2016
    equipo = team1
    carrera = devops
    proyecto = clouddevops  
    institucion = educacionit
    entorno = produccion
  }
}

resource "aws_ebs_volume" "ebs-volume-1" {
  availability_zone = "sa-east-1c"
  size = 30
  type = "gp2"
}

resource "aws_volume_attachment" "ebs-volume-1-attachment" {
  device_name = "/dev/xvdh"
  volume_id = "${aws_ebs_volume.ebs-volume-1.id}"
  instance_id = "${aws_instance.example.id}"
}

resource "aws_security_group" "allow_rdp"  {
  name = "allow_rdp" 
  description = "security group para instancias EC2"
  ingress {
  from_port = 3389
  to_port = 3389
  protocol = "tcp"
  cidr_blocks =  ["0.0.0.0/0"]
  }
}


