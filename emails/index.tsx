import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const NotionWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Gracias por unirte a la lista de espera, {userFirstname}! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://nextjs-notion-waitlist.vercel.app/waitlist-logo.png`}
          width="220"
          height="100"
          alt="Notion Waitlist Logo"
          style={logo}
        />
        <Text style={greeting}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Gracias por unirse a la lista de espera de nuestra lista de espera de la pagina web
          de ¡Ocean Blue!. Soy Zulimar, la desarrolladora detrás de este proyecto. Me alegro de
          tenerte a bordo.
        </Text>
        <Text style={paragraph}>
          Te mantendré informado sobre el progreso y te notificaré tan pronto
          como este listo para que lo uses. Mientras tanto, si tienes alguna
          preguntas o comentarios, no dudes en comunicarte conmigo respondiendo 
          directamente a{" "}
          <a href="mailto:lakshb.work@gmail.com" style={link}>
            this email {""}
          </a>
          — ¡Estoy aquí para escuchar!
        </Text>
        <Text style={paragraph}>
          También puedes seguirme en X/Twitter para recibir actualizaciones:{" "}
          <a href="https://x.com/blakssh" style={link}>
            @blakssh
          </a>
        </Text>
        <Text style={signOff}>
          Saludos cordiales,
          <br />
          Lakshay
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Recibiste este correo electrónico porque te registraste en la lista de espera.
          Si cree que esto es un error, no dude en ignorar este correo electrónico.
        </Text>
      </Container>
    </Body>
  </Html>
);

NotionWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as EmailProps;

export default NotionWaitlistEmail;

const main = {
  background: "linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#cccccc",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const link = {
  color: "#F7FF9B",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};
