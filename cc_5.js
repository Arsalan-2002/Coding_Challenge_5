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

console.log("Task 1: Implement Employee class with name, salary properties, and annual salary calculation.");
const employee1 = new Employee("Alice Johnson", 5000);
console.log(`Annual Salary of ${employee1.name}: $${employee1.calculateAnnualSalary()}\n`);


console.log("Task 2: Create Manager subclass with bonus calculation.");
const manager1 = new Manager("Bob Ross", 6600, "Digital Marketing");
manager1.calculateAnnualSalary();

const manager2 = new Manager("Debbie Little", 7205, "Finance");
manager2.calculateAnnualSalary();

console.log("\nTask 3: Instantiate Manager objects and calculate annual salaries with bonuses.");
const manager3 = new Manager("Charlie Brown", 8000, "Sales");
manager3.calculateAnnualSalary();

const manager4 = new Manager("Eva Green", 9000, "Operations");
manager4.calculateAnnualSalary();
