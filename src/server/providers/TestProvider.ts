import { Provider, ProtonStart, Lifecycle } from "@rbxts/proton";
import { Network } from "shared/network";

@Provider()
export class MyProvider {
    @Lifecycle(ProtonStart)
    onStart() {
        Network.sayHello.server.connect((player: Player, msg: String) => {
            print(player.Name + " says " + msg)
        })
    }
}