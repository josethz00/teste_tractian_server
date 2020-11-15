"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const Company_1 = require("../models/Company");
class CompanyController {
    async index(_request, response) {
        const company = await Company_1.Company.find();
        return response.status(200).json(company);
    }
    async queryOne(request, response) {
        const { id } = request.params;
        const company = await Company_1.Company.findById(id).populate({
            path: 'unity',
            populate: {
                path: 'machines',
                model: 'Machine'
            }
        });
        if (!company)
            return response.status(404);
        if (!company.unity)
            return response.status(404);
        return response.status(200).json(company);
    }
    async store(request, response, next) {
        try {
            const { name } = request.body;
            await Company_1.Company.create({
                name
            });
            return response.status(201).send('Empresa cadastrada com sucesso');
        }
        catch (error) {
            next(error);
        }
    }
}
exports.CompanyController = CompanyController;
//# sourceMappingURL=CompanyController.js.map