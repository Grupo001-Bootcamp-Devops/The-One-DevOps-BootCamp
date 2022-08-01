terraform {
  required_version = ">= 0.12"
}

provider "google" {
  project     = var.gcp_project
  credentials = file(var.gcp_auth_file)
  region      = var.gcp_region
}

resource "google_sql_database_instance" "main" {
  name             = "sprint4-cloudsql"
  database_version = "MySQL_8_0"
  region           = "us-central1"
  deletion_protection = false

  settings {
    # Second-generation instance tiers are based on the machine
    # type. See argument reference below.
    tier = "db-f1-micro"
    user_labels = {
      type        = "database"
      equipo      = "team1"
      carrera     = "clouddevops"
      institucion = "educacionit"
    }
  }
}

