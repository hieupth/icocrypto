import Image from "next/image";

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
    member: MemberInfor;
    teamType: number
}

export const BoardMember: React.FC<BlockBoardMemberProps> = ({member, teamType}) => {
    return(
        <div 
            className= {`team team-s2 team-sm-s2 team-${teamType%2 !==0 ? "even": "odd"} animated fadeInUp fadeInUp`}
            data-animate="fadeInUp" 
            data-delay= {member.delay}
            style={{ visibility: "visible", animationDelay: `${member.delay}s` }}
            >
            
            <div className="team-photo team-photo-s2" >
                <Image
                    src= {member.imageUrl} 
                    width={140} height={150} alt="image of team-c"
                />
                
            </div>
            <h5 className="team-name title title-sm">{member.name}</h5>
            <span className="team-position team-position-sm">{member.position}</span>
            <ul className="team-social team-social-s2">
                {member.socialLinks.map((link, index) => (
                    <li key={index}><a href={link.url}><em className={link.icon}></em></a></li>
                ))}
            </ul>
        </div>
    )
}