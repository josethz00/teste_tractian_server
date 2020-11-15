"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineController = void 0;
const Unity_1 = require("../models/Unity");
const Machine_1 = require("../models/Machine");
const User_1 = require("../models/User");
class MachineController {
    async index(_request, response) {
        const machine = await Machine_1.Machine.find();
        return response.status(200).json(machine);
    }
    async queryScore(_request, response) {
        const machine = await Machine_1.Machine.find().select('health_score').exec();
        let variable;
        const results = [0, 0, 0];
        for (variable of machine) {
            if (variable.health_score >= 80) {
                results[0] += 1;
            }
            else if (variable.health_score > 60 && variable.health_score < 80) {
                results[1] += 1;
            }
            else {
                results[2] += 1;
            }
        }
        return response.status(200).json(results);
    }
    async store(request, response, next) {
        try {
            const file = request.file;
            const { user_id, unity_id } = request.headers;
            const { name, description, machine_model, health_score, status } = request.body;
            const _unity = await Unity_1.Unity.findById(unity_id);
            const _user = await User_1.User.findById(user_id);
            if (_unity && _user) {
                const machine = await Machine_1.Machine.create({
                    name,
                    description,
                    image_url: file.location,
                    machine_model,
                    health_score,
                    unity: _unity._id,
                    user: _user._id,
                    status
                });
                _unity.machines.push(machine._id);
                await _unity.save();
                return response.status(201).send('Unidade cadastrada com sucesso');
            }
            return response.status(404).send('Unidade ou usuário especificados não existem');
        }
        catch (error) {
            next(error);
        }
    }
}
exports.MachineController = MachineController;
//# sourceMappingURL=MachineController.js.map