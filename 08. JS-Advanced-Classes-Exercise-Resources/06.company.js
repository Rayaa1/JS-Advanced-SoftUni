class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (!name || (salary < 0 || !salary) || !position || !department) {
            throw new Error("Invalid input!")
        }
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = []
        }
        this.departments[department].push({ name, salary, position })
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        const avg = {}
        for (const key in this.departments) {
            const avgSalary = this.departments[key].reduce((acc, cur, inx, arr) => acc + (cur.salary / arr.length), 0);
            avg[key] = avgSalary;
        }
        const bestOneDep = Object
            .entries(avg)
            .sort((a, b) => b[1] - a[1])[0];
        const bestOneDepEmp = Object
            .values(this.departments[bestOneDep[0]])
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        let result = '';
        result += `Best Department is: ${bestOneDep[0]}\n`;
        result += `Average salary: ${bestOneDep[1].toFixed(2)}\n`;
        bestOneDepEmp.forEach(emp => result += `${emp.name} ${emp.salary} ${emp.position}\n`);
        return result.trim();
    }

}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
