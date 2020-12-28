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
	hideVoiceServer: boolean;
	enableSpatialAudio: boolean;
	adjustLiveOnDead: number;
	haunting: boolean;
	compactOverlay: boolean;
	overlayPosition: string;
	localLobbySettings: ILobbySettings;
}

export interface ILobbySettings {
	maxDistance: number;
}
