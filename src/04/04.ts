export default {}
const ages = [18,20,22,1,100,90,14];

const predicate = (age: number) => {
    return age > 90;
}

const olgAges = [100];

type CurseType = {
    title: string
    price: number
}

const curses =  [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
]

const chipPredicate = (course: CurseType) => {
    return course.price < 160;
}

const chipCourses = [
    {title: "CSS", price: 110},
    {title: "REACT", price: 150}
]
