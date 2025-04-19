import './TdsProff.scss'
import member3 from '../../Assets/AboutUs/Team_members/member3'
import Card from './Card/Card'

export default function TdsProff(){

    return (
        <div className="prof-Wrapper">
            <span className="title">TDS Professional</span>
            <span className="details">Imagine your dream interior, then watch it come alive with our talented team of professionals. Your vision, our expertise – the perfect partnership for stunning spaces.</span>
            <div className="parentDiv">
              <Card image={member3} name={"Suresh Dugad"} role={"Site Foreman"}/>
              <Card image={member3} name={"Sanjana Bhandari"} role={"Lead Designer"}/>
              <Card image={member3} name={"Amey Bhandari"} role={"Manager"}/>
            </div>
        </div>
)
}