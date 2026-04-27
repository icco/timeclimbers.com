import { Footer as CommonFooter } from "@icco/react-common/Footer";

export default function Footer() {
  return (
    <CommonFooter
      startYear={2024}
      sourceRepo="https://github.com/icco/timeclimbers.com"
      showSocial={false}
      showRecurseCenter={false}
      showRecurseRing={false}
      showXXIIVVRing={false}
      showPrivacyPolicy={true}
    />
  );
}
