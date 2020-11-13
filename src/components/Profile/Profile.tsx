import React from "react"
import "./Profile.scss"
import { ReactComponent as Person } from "../../assets/images/profilePage.svg"
import Button from "../common/Button"


interface ProfileProps {

}

const Profile = ({ }: ProfileProps) => {
    return (
        <div className="Profile-Content">
            <div className="Profile-Content-Logo">
                <Person className="Profile-Content-Logo-Icon" />
            </div>
            <div className="Profile-Content-middle">
                <div className="Profile-Content-middle-Text">
                    <p className="Profile-Content-middle-Text-Name">김진호</p>
                    <p className="Profile-Content-middle-Text-Email">jhkim6831@gmail.com</p>
                </div>
                <div className="Profile-Content-middle-Button">
                    {/* <input type="file" accept="" className="Profile-Content-middle-Button-Change">프로필 변경</input> */}
                    <Button text="프로필 변경" style={{ width: "8.6rem" }} className="Profile-Content-middle-Button"></Button>
                </div>
            </div>

            <div className="Profile-Content-Input">
                <input className="Profile-Content-Input-Writing" />
            </div>
        </div>
    )
}

export default Profile;