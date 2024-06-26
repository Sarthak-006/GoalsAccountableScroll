import { ConnectEmbed } from "@/app/thirdweb";
import { Accountability } from "../../components/Accountability";
import { client } from "./client";
import { chain } from "./chain";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}>
      <h1 style={{ marginBottom: "20px", color: "gold" }}>Make Your Goals Accountable </h1>
      <ConnectEmbed 
        client={client}
        chain={chain}
      />
      <Accountability />
    </div>
  );
}