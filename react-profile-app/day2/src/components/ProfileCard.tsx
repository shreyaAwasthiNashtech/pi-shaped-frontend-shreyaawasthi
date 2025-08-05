import React, { useState } from 'react';
import type { MouseEventHandler, ReactNode } from 'react';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
  name: string;
  age: number;
  email: string;
  children: ReactNode;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, age, email, children }) => {
  const [showBio, setShowBio] = useState<boolean>(false);

  const toggleBio: MouseEventHandler<HTMLButtonElement> = () => {
    setShowBio(prev => !prev);
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.info}><strong>Age:</strong> {age}</p>
      <p className={styles.info}><strong>Email:</strong> {email}</p>
      <button
        className={styles.button}
        onClick={toggleBio}
        aria-expanded={showBio}
        aria-label={`${showBio ? 'Hide' : 'Show'} bio of ${name}`}
      >
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
      {showBio && <div className={styles.bio}>{children}</div>}
    </div>
  );
};

export default ProfileCard;