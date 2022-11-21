// shared/network.ts
import { NetEvent, NetEventType, NetFunction } from "@rbxts/proton";

export namespace Network {
	export const sayHello = new NetEvent<[msg: String], NetEventType.ClientToServer>();
}