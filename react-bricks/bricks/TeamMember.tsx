import React from 'react'
import { types, Image, Text, RichText } from 'react-bricks/frontend'
import styles from '../../css/TeamMember.module.css'

interface TeamMemberProps {
  memberName: string;
  memberSubTitle: string;
  memberBio: string;
}

const TeamMember: types.Brick<TeamMemberProps> = () => {
  return (
    <div className={styles.member}>
      <div className={styles.memberImageColumn}>
        <div className={styles.memberImagePrimaryCard} />
        <div className={styles.memberImageSecondarySkewedCard} />
        <Image
          propName='teamImage'
          alt='Team Member'
          maxWidth={175}
          aspectRatio={1}
          imageClassName={styles.memberPhoto}
          renderWrapper={({children}) => (
            <div className={styles.memberImagePhotoHolder}>
              {children}
            </div>
          )}
        />
      </div>
      <div className={styles.memberContent}>
        <Text
          propName='memberName'
          renderBlock={({ children }) => (
            <h2>{children}</h2>
          )}
          placeholder=''
        />
        <Text
          renderBlock={({ children }) => (
            <h4>{children}</h4>
            )}
          placeholder=''
          propName='memberSubTitle'
        />
        <RichText
          propName='memberBio'
          renderBlock={({ children }) => (
            <p className={styles.memberBio}>{children}</p>
          )}
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Highlight
          ]}
          renderHighlight={({ children }) => (
            <span style={{ color: '#F5647F' }}>{children}</span>
          )}
        />
      </div>
    </div>
  );
}

TeamMember.schema = {
  name: 'TeamMember',
  label: 'Team Member',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    memberName: 'Team Member Name',
    memberSubTitle: 'Team Member Subtitle',
    memberBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  }),
}

export default TeamMember;