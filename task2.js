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

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        const baseAnnualSalary = super.calculateAnnualSalary();
        const bonus = baseAnnualSalary * 0.15;
        const totalAnnualSalary = baseAnnualSalary + bonus;
        console.log(`Bonus for ${this.name} (${this.department} Department): $${bonus.toFixed(2)}`);
        console.log(`Total Annual Salary for ${this.name} including bonus: $${totalAnnualSalary.toFixed(2)}`);
        return totalAnnualSalary;
    }
}

const manager1 = new Manager("Bob Ross", 6600, "Digital Marketing");
manager1.calculateAnnualSalary();

const manager2 = new Manager("Debbie Little", 7205, "Finance");
manager2.calculateAnnualSalary();
