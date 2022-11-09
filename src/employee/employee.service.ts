import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    getEmployee() {
        return [{
        id: 1,
        name: 'Horacio'
    },
    {
        id: 2,
        name: 'Valerio'
    },
    {
        id: 3,
        name: 'Jose'
    }]
    }
}
