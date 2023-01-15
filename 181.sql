-- 181. Employees Earning More Than Their Managers
select e.name as Employee
FROM Employee AS e, Employee AS m
where e.managerId = m.id
and
e.salary > m.salary