import { Socials } from "../../components/Socials";
import TeamMemberImage1 from "../../assets/img/about/team-1.png";
import TeamMemberImage2 from "../../assets/img/about/team-2.png";
import TeamMemberImage3 from "../../assets/img/about/team-3.png";
import TeamMemberImage4 from "../../assets/img/about/team-4.png";
import "./team.scss";

export function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Jenny Wilson",
      job: "Ceo & Founder",
      image: TeamMemberImage1,
    },
    {
      id: 2,
      name: "Jane Cooper",
      job: "Worker",
      image: TeamMemberImage2,
    },
    {
      id: 3,
      name: "Cody Fisher",
      job: "Security Guard",
      image: TeamMemberImage3,
    },
    {
      id: 4,
      name: "Robert Fox",
      job: "Senior Farmer Manager",
      image: TeamMemberImage4,
    },
  ];

  return (
    <section className="team">
      <div className="container">
        <div className="team__wrapper">
          <div className="team__title">
            <h2>Our Awesome Team</h2>
            <p>
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi.
            </p>
          </div>

          <div className="team__content">
            <div className="team__content-list">
              {teamMembers.map((member) => (
                <div key={member.id} className="team__item">
                  <div className="team__item-image">
                    <div className="team__item-hover">
                      <Socials withTitle={false} variant="white" />
                    </div>
                    <img src={member.image} />
                  </div>

                  <div className="team__item-info">
                    <p>{member.name}</p>
                    <span>{member.job}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
