import { StatusCodes } from "http-status-codes";
import User from "../interfaces/user.interfaces";

function validationUser(req:any, res:any, next:any) {
  const user: User = req.body;

  if (!user.email || !user.name || !user.password) {
    return res.status(StatusCodes.BAD_REQUEST).send('Todos os campos devem ser preenchidos');
  }

  next();
}

export default validationUser;
