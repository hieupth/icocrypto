import React from 'react';
import { BoardMember } from "../elements/element-board-member";

interface SocialList {
    icon: string; 
    url: string;
}

interface MemberInfor {
    name: string; 
    position: string;
    imageUrl: string;
    delay: string;
    socialLinks: SocialList[];
}

interface BlockBoardMemberProps {
    members: MemberInfor[];
}

export const BlockBoardMember: React.FC<BlockBoardMemberProps> = ({members}) => {
    return(
        <div className="row">
            {members.map((member, index) =>(
            <div className="col-md-4 col-lg-2 col-6" key={index}>
                <BoardMember member={member} teamType={index}/>
            </div>
            ))}
        </div> 
    )
}