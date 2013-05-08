package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {
  
  def index = Action {
    Ok(views.html.index())
  }
  
  def parseUser(flxUserId:Long, authToken:String) = Action { 
   Ok(views.html.user(flxUserId, authToken))
  }
}