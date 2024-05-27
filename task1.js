class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log(`Employee Name: ${this.name}`);
        console.log(`Monthly Salary: $${this.salary}`);
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

const employee1 = new Employee("Alice Johnson", 5000);
console.log(`Annual Salary of ${employee1.name}: $${employee1.calculateAnnualSalary()}`);

const employee2 = new Employee("John Doe", 4500);
console.log(`Annual Salary of ${employee2.name}: $${employee2.calculateAnnualSalary()}`);
