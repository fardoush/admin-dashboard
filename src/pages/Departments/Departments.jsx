import React from 'react';
import DepartmentsCard from '../../components/ui/DepartmentsCard';

const Departments = () => {
    return (
        <div>
              <h2 className="text-center">Departments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <DepartmentsCard/>
                <DepartmentsCard/>
                <DepartmentsCard/>
                <DepartmentsCard/>
                <DepartmentsCard/>
              </div>
        </div>
    );
};

export default Departments;