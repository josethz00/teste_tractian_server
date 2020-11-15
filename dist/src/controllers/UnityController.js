"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityController = void 0;
const Company_1 = require("../models/Company");
const Unity_1 = require("../models/Unity");
class UnityController {
    async index(_request, response) {
        const queryUnities = await Unity_1.Unity.find();
        let variable = null;
        let unities = [];
        for (variable of queryUnities) {
            unities.push({
                _id: variable._id,
                name: variable.name
            });
        }
        return response.status(200).json(unities);
    }
    async store(request, response, next) {
        try {
            const { name } = request.body;
            const { company_id } = request.headers;
            const company = await Company_1.Company.findById(company_id);
            if (company) {
                const unity = await Unity_1.Unity.create({
                    name
                });
                company.unity.push(unity._id);
                await company.save();
                return response.status(201).send('Unidade cadastrada com sucesso');
            }
            return response.status(404).send('A empresa especificada não existe');
        }
        catch (error) {
            next(error);
        }
    }
}
exports.UnityController = UnityController;
//# sourceMappingURL=UnityController.js.map