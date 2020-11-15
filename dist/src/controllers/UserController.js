"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_1 = require("../models/User");
class UserController {
    async index(_request, response) {
        const user = await User_1.User.find();
        return response.status(200).json(user);
    }
    async store(request, response, next) {
        try {
            const { username } = request.body;
            await User_1.User.create({
                username
            });
            return response.status(201).send('Usuário criado com sucesso');
        }
        catch (error) {
            next(error);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map