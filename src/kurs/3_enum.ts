// ENUM

enum MemberShip {
  Simple,
  Standard,
  Premium,
}

const membership = MemberShip.Standard;
console.log(membership);

const membershipReverse = MemberShip[2];
console.log(membershipReverse);

enum SocialMedia {
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

const social = SocialMedia.FACEBOOK;
console.log(social);
