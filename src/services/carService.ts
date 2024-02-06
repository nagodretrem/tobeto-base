import { AddCarRequest } from "../models/cars/requests/addCarRequest";
import { UpdateCarRequest } from "../models/cars/requests/updateCarRequest";
import { GetAllCarResponse } from "../models/cars/responses/getAllCarResponse";
import { GetByIdCarResponse } from "../models/cars/responses/getByIdCarResponse";
import { UpdateCarResponse } from "../models/cars/responses/updateCarResponse";
import { BaseService } from "./baseService";

class CarService extends BaseService<
GetAllCarResponse,
GetByIdCarResponse, 
AddCarRequest, 
AddCarRequest, 
UpdateCarRequest, 
UpdateCarResponse> {
    
    
    constructor() {
        super();
        this.apiUrl = "cars";
    }
}

export default new CarService();