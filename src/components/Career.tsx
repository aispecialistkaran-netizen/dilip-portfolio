import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Graphic Designer</h4>
                <h5>xMonks · Gurugram (Delhi NCR)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading brand identity and design at xMonks — a Personal and Leadership Transformation company.
              Delivered India's first Coaching Magazine "Alchemy" (6 issues), boosted user engagement by 55%,
              website traffic by 78%, and email open rates from 20% to 46% through impactful creatives.
              Managed a team of three graphic designers, improving on-time delivery from 32% to 75%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Graphic Designer</h4>
                <h5>Digital World · Gurugram (Delhi NCR)</h5>
              </div>
              <h3>2017–19</h3>
            </div>
            <p>
              Delivered daily creatives for corporate designing and printing clients. Designed menus,
              leaflets, brochures, billboards, digital boards, and branding materials for clients including
              Glitz Studio, Yummy Platters, Teacupsfull, The Goodness Store, and The Hillroot Farm.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
                <h5>PrintExpressions · Gurugram (Delhi NCR)</h5>
              </div>
              <h3>2016–17</h3>
            </div>
            <p>
              Created diverse marketing and branding materials for high-profile clients. Raised TATA Motors
              client engagement by 35% through brochures, manuals, and wallpaper branding. Increased
              Volkswagen client engagement by 42% through wallpapers, banners, and posters.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
                <h5>Impression Plus · Gurugram (Delhi NCR)</h5>
              </div>
              <h3>2015–16</h3>
            </div>
            <p>
              Engaged 65% of organizational clients through corporate gifting, print branding, and media
              branding creatives. Delivered brochures, standees, visiting cards, lanyards, and ID cards
              for clients like CEVENT and Cut &amp; Style. Increased brand engagement by 42% for sports
              brand clients Sport Sala and Passerine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
