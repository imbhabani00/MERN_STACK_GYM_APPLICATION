import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>High-Intensity Interval Training (HIIT)</h1>
        <p>
        Experience the ultimate calorie-burning workout with our HIIT sessions. Get ready to push your limits, torch fat, and improve cardiovascular health in our fast-paced, dynamic classes.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>Strength TrainingS</h1>
        <p>
        Build lean muscle, increase strength, and sculpt your body with our strength training sessions. Whether you're a beginner or an experienced lifter, our expert trainers will guide you through proper technique and effective exercises.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Yoga and Meditation</h4>
            <p>
            Discover inner peace, flexibility, and balance with our yoga and meditation sessions. Join us for a rejuvenating practice that combines breathwork, mindfulness, and gentle movement to reduce stress and enhance overall well-being.
            </p>
          </div>
          <div>
            <h4>Bootcamp</h4>
            <p>
            Challenge yourself with our bootcamp sessions designed to push you to your limits and beyond. Expect a mix of cardio, strength, and agility exercises in a motivating group setting. Get ready to sweat and see results!
            </p>
          </div>
          <div>
            <h4>Spin/Cycling</h4>
            <p>
            Pedal your way to fitness with our spin/cycling sessions. Experience a high-energy, music-driven workout that will challenge your endurance, build leg strength, and boost cardiovascular fitness. Get ready to ride to the rhythm!
            </p>
          </div>
          <div>
            <h4>Cardio Kickboxing</h4>
            <p>
            Unleash your inner warrior with our cardio kickboxing sessions. Burn calories, relieve stress, and learn self-defense techniques in a fun and energetic environment. No experience necessary – just come ready to sweat!
            </p>
          </div>
          <div>
            <h4>Senior Fitness</h4>
            <p>
            Stay active, healthy, and independent with our senior fitness sessions. Designed specifically for older adults, our classes focus on improving balance, flexibility, and strength to support aging gracefully and maintain quality of life!
            </p>
          </div>
          <div>
            <h4>TRX Suspension Training</h4>
            <p>
            Take your workout to new heights with our TRX suspension training sessions. Using straps and your own body weight, you'll engage multiple muscle groups simultaneously for a total-body workout that improves strength, stability, and flexibility!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
