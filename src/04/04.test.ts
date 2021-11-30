export default {}

test('take old then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];
   // const predicate = (age: number) => age > 90;

        const oldAges = ages.filter(age => age > 90);

        expect(oldAges.length).toBe(1);
        expect(oldAges[0]).toBe(100);
    }
)

test('should take courses chipper 160', () => {
    const curses =  [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
    ]
    //const chipPredicate = (course: CurseType) => course.price < 160;

        const chipCourses = curses.filter(course => course.price < 160);

        expect(chipCourses.length).toBe(2);
        expect(chipCourses[0].title).toBe('CSS');
        expect(chipCourses[1].title).toBe('REACT');
    }
)
    test("Get only completed task", () => {
        const tasks  = [
            {id: 1, title: "Bread", isDane: false},
            {id: 2, title: "Milk", isDane: true},
            {id: 3, title: "Salt", isDane: false},
            {id: 4, title: "Sugar", isDane: true},
        ]
    const complitedTask = tasks.filter(task => task.isDane)
        expect(complitedTask.length).toBe(2);
        expect(complitedTask[0].id).toBe(2);
        expect(complitedTask[1].id).toBe(4);
})
test("Get only uncompleted task", () => {
    const tasks  = [
        {id: 1, title: "Bread", isDane: false},
        {id: 2, title: "Milk", isDane: true},
        {id: 3, title: "Salt", isDane: false},
        {id: 4, title: "Sugar", isDane: true},
    ]
    const uncomplitedTask = tasks.filter(task => !task.isDane)
    expect(uncomplitedTask.length).toBe(2);
    expect(uncomplitedTask[0].id).toBe(1);
    expect(uncomplitedTask[1].id).toBe(3);
})



