
const Timeline = () => {
  return (
    <div className="container">
        <div className="timeline">
            <div className="timeline__total-work"></div>
            <div className="timeline__legend">
                <div className="timeline__legend-item">Non-IT</div>
                <div className="timeline__legend-item">IT</div>
            </div>
            <div className="timeline__items">
                <div className="timeline__item timeline__item--1 right-line">
                    <div className="timeline__item-company">UPC</div>
                    <div className="timeline__item-title">Call-center Operator</div>
                    <div className="timeline__item-desc">Build internal DB and handle national/international calls</div>
                    <div className="timeline__item-years">8 months</div>
                </div>
                <div className="timeline__item timeline__item--2 bottom-line">
                    <div className="timeline__item-company">Visual Hobby</div>
                    <div className="timeline__item-title">Video Editor / Cameraman</div>
                    <div className="timeline__item-desc">Record events and edit them.</div>
                    <div className="timeline__item-years">1 year</div>
                </div>
                <div className="timeline__item timeline__item--4 left-line">
                    <div className="timeline__item-company">SC FUNGUS SRL</div>
                    <div className="timeline__item-title">PC Operator / Driver</div>
                    <div className="timeline__item-desc">Do deliveries and handle things PC related.</div>
                    <div className="timeline__item-years">2 years</div>
                </div>
                <div className="timeline__item timeline__item--3 it bottom-line">
                    <div className="timeline__item-company">SC INSIDE MEDIA COMMUNICATION SRL</div>
                    <div className="timeline__item-title">Frontend Developer</div>
                    <div className="timeline__item-desc">Build websites for customers in a private CMS.</div>
                    <div className="timeline__item-years">5 years</div>
                </div>
                <div className="timeline__item timeline__item--5 it">
                    <div className="timeline__item-company">SC OMNICONVERT SRL</div>
                    <div className="timeline__item-title">Frontend Developer</div>
                    <div className="timeline__item-desc">Modify client sites with A/B experiments, overlays, surveys to improve customer retention</div>
                    <div className="timeline__item-years">present</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timeline