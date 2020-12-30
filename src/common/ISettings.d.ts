export interface ISettings {
	alwaysOnTop: boolean;
	microphone: string;
	speaker: string;
	pushToTalk: boolean;
	serverURL: string;
	pushToTalkShortcut: string;
	deafenShortcut: string;
	muteShortcut: string;
	hideCode: boolean;
	enableSpatialAudio: boolean;
	localLobbySettings: ILobbySettings;
	hideVoiceServer: boolean;
}

export interface ILobbySettings {
	maxDistance: number;
}
