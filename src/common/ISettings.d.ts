
export interface ISettings {
	alwaysOnTop: boolean;
	microphone: string;
	speaker: string;
	pushToTalk: boolean;
	serverURL: string;
	pushToTalkShortcut: string;
	deafenShortcut: string;
	offsets: {
		version: string;
		data: string;
	},
	hideCode: boolean;
	hideVoiceServer: boolean;
	enableSpatialAudio: boolean;
	compactOverlay: boolean;
	overlayPosition: string;
	adjustLiveOnDead: number;
}
