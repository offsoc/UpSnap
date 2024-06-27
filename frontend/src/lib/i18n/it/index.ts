import type { BaseTranslation } from '../i18n-types';

const it = {
	home: {
		page_title: 'Home',
		order_groups: 'Gruppi',
		order_name: 'Nome',
		order_ip: 'IP',
		order_tooltip: 'Ordine',
		no_devices: 'Nessun dispositivo qui.',
		add_first_device: 'Aggiungi il tuo primo dispositivo',
		grant_permissions:
			"Per favore chiedi all' amministratore di darti i permessi necessari per aggiungere un nuovo dispositivo."
	},
	account: {
		page_title: 'Account',
		account_type_admin: 'Amministratore',
		account_type_user: 'Utente',
		avatar_title: 'Avatar',
		language_title: 'Lingua',
		language_option_auto: 'Automatico',
		change_password_title: 'Cambia password',
		change_password_body: 'Dopo aver cambiato la password, dovrai effettuare di nuovo il login.',
		change_password_label: 'Vecchia password',
		change_password_new: 'Nuova password',
		change_password_confirm: 'Conferma la password'
	},
	device: {
		page_title: 'Nuovo dispositivo',
		tabs: ['Manuale', 'Scansiona la rete'],
		card_btn_more: '...',
		card_btn_more_edit: 'Modifica',
		card_btn_more_sleep: 'Dormi',
		card_btn_more_reboot: 'Riavvia',
		card_tooltip_wake_cron: 'Sveglia programmata',
		card_tooltip_shutdown_cron: 'Spegnimento programmato',
		card_tooltip_wake_password: 'Password sveglia',
		card_tooltip_last_status_change: 'Ultimo cambiamento di stato',
		card_password: 'Password',
		card_nic_tooltip_pending: 'In attesa',
		card_nic_tooltip_shutdown: 'Spegni',
		card_nic_tooltip_shutdown_no_cmd: 'Nessun comando di spegnimento impostato',
		card_nic_tooltip_shutdown_no_permission:
			'Non hai i permessi necessari per spegnere questo dispositivo',
		card_nic_tooltip_power: 'Accendi',
		card_nic_tooltip_power_no_permission:
			'Non hai i permessi necessari per accendere questo dispositivo',
		modal_confirm_wake_title: 'Accendere {device}?',
		modal_confirm_wake_desc: 'Sicuro di voler accendere {device}.',
		modal_confirm_shutdown_title: 'Spegnere {device}?',
		modal_confirm_shutdown_desc: 'Sicuro di voler spegnere {device}.',
		general: 'Generale',
		general_name: 'Nome',
		general_name_placeholder: 'Nome dispositivo',
		general_ip: 'IP',
		general_mac: 'Mac',
		general_netmask: 'Maschera di rete',
		general_required_field: 'Campo obbligatorio',
		ports: 'Porte',
		ports_desc: "UpSnap puo' anche controllare che le porte siano aperte.",
		ports_add_new: 'Aggiungi nuova porta',
		ports_name: 'Nome',
		ports_number: 'Numero',
		link: 'Collegamento',
		link_desc:
			'Rende il nome del tuo dispositivo un collegamento, perfetto per collegare ad esempio un sito.',
		ping: 'Ping',
		ping_desc:
			'Puoi usare un comando personalizzato per controllare che il dispositivo sia acceso. Il comando deve ritornare un codice uguale a <span class="badge">0</span> per confermare che il dispositivo sia acceso, mentre qualunque altro codice indica che il dispositivo e\' spento.',
		ping_cmd: 'Comando ping personalizzato',
		wake: 'Accendi',
		wake_desc: 'Puoi accendere questo dispositivo con una sveglia programmata.',
		wake_cmd: 'Comando di accensione personalizzato',
		wake_cron: 'Sveglia programmata',
		wake_cron_enable: 'Abilita sveglia programmata',
		sol: 'Sleep-On-LAN',
		sol_desc1:
			'Puoi spegnere il tuo dispositivo usando lo strumento <a class="link" href="https://github.com/SR-G/sleep-on-lan" target="_blank">Sleep-On-LAN</a>. Sleep-On-LAN (SOL) e\' uno strumento esterno che opera sul dispositivo che vuoi spegnere, il quale rende disponibile un endpoint REST. Puoi riferirti al link <a href="https://github.com/SR-G/sleep-on-lan#usage" class="link" target="_blank">Uso</a> (in inglese) per le istruzioni.',
		sol_desc2:
			"Lo strumento SOL e' configurato per mandare richieste con il protocollo HTTP invece che UDP per abilitare l' autorizzazione e rendere le richieste piu' affidabili",
		sol_desc3:
			'Pertanto, assicuratevi di includere <span class="badge">HTTP:&lt;LA-TUA-PORTA&gt;</span> nella sezione <span class="badge">Listeners</span> della <a href="https://github.com/SR-G/sleep-on-lan#configuration" class="link" target="_blank">configurazione di SOL</a>.',
		sol_enable: 'Abilita Sleep-On-LAN',
		sol_port: 'Porta SOL',
		sol_authorization: 'Autorizzazione',
		sol_user: 'Utente SOL',
		sol_password: 'Password SOL',
		shutdown: 'Spegni',
		shutdown_desc:
			'Questo <strong>prompt dei comandi</strong> girera\' nel tuo container (se usi docker) o direttamente sul tuo host (se usi i file di installazione). Per verificare che funzioni correttamente, puoi eseguire i comandi direttamente nel container o nel tuo sistema host. Alcuni comandi comuni sono <span class="badge">net rpc</span> per windows, <span class="badge">sshpass</span> per linux oppure <span class="badge">curl</span> in generale per fare richieste con HTTP.',
		shutdown_examples: 'Esempi:',
		shutdown_examples_windows: 'Spegni macchina windows remota:',
		shutdown_examples_linux: 'Spegni macchina linux remota:',
		shutdown_cmd: 'Comando di spegnimento',
		shutdown_cron_desc:
			'Settando i parametri esattamente come fareste con cron su linux, potrete cosi anche impostare un azione di spegnimento su questo dispositivo.',
		shutdown_cron: 'Parametri di spegnimento per cron',
		shutdown_cron_enable: 'Abilita lo spegnimento tramite cron',
		password: 'Password',
		password_desc:
			'Alcune schede di rete hanno una opzione per settare una password per i magic packets, chiamata anche <span class="badge">SecureON</span>. La lunghezza della password puo\' essere solo di 0, 4 o 6 caratteri.',
		groups: 'Gruppi',
		groups_desc:
			'Puoi aggiungere un dispositivo ad un gruppo per averli raggruppati nel schermata principale.',
		groups_placeholder: "per esempio 'Cantina' o 'Ufficio'",
		network_scan_range_saved: 'Intervallo di scansione salvato',
		network_scan_desc:
			"Scansiona automaticamente la tua rete per i dispositivi disponibili. Affinche' funzioni, devi eseguire UpSnap come root/admin ed avere nmap installato e disponibile nella variabile d'ambiente $PATH (per gli utenti docker, questo e' gia' il caso e non devi cambiare niente). La scansione puo' richiedere alcuni secondi.",
		network_scan_ip_range: 'Intervallo IP',
		network_scan_no_range: 'Nessuno intervallo di scansione',
		network_scan_unsaved_changes: 'Modifiche non salvate',
		network_scan_running: 'Scansione in corso',
		network_scan: 'Scansiona',
		network_scan_ip: 'IP:',
		network_scan_mac: 'Mac:',
		network_scan_mac_vendor: 'Fornitore Mac:',
		network_scan_netmask: 'Maschera di rete:',
		network_scan_add_all: 'Aggiungi tutti i dispositivi',
		network_scan_replace_netmask: 'Modificare la maschera di rete per tutti i dispositivi?',
		network_scan_new_netmask: 'Nuova mascheda di rete',
		network_scan_include_unknown: 'Includi i dispositivi il cui nome e\' "Unknown" o "Sconosciuto"',
		require_confirmation: 'Chiedi conferma'
	},
	login: {
		welcome: 'Benvenuti',
		email_label: 'Email o nome utente:',
		password_label: 'Password:',
		btn_more: 'Di piu...',
		menu_title_auth_providers: 'Altri gestori di autenticazione',
		btn_login: 'Login'
	},
	settings: {
		page_title: 'Opzioni',
		ping_interval_title: 'Intervallo di ping',
		ping_interval_desc1:
			'Imposta l\'intervallo nel quale i dispositivi vengono testati con ping. Lasciare in bianco per lasciare il valore predefinito <span class="badge">@every 3s</span>.',
		ping_interval_desc2:
			'Per ulteriori dettagli circa la sintassi corretta di cron, fare riferimento a <a class="link" href="https://it.wikipedia.org/wiki/Cron" target="_blank">Wikipedia</a> oppure a <a class="link" href="https://pkg.go.dev/github.com/robfig/cron/v3" target="_blank">questa documentazione</a> (in inglese).',
		lazy_ping_title: 'Ping pigro',
		lazy_ping_desc:
			"Quando il ping pigro e' abilitato, UpSnap effettuera' i ping verso di dispositivi solamente quando un utente effettivamente visita il sito. Se e' spento, allora UpSnap continuera' con il ping sempre.",
		lazy_ping_enable: 'Abilita',
		website_title_title: 'Nome del sito',
		website_title_desc: 'Imposta il nome del sito.',
		icon_title: 'Icona',
		icon_desc: 'Imposta una icona personalizzata. I tipi di file supportati sono:',
		upsnap_version: 'Versione UpSnap'
	},
	users: {
		page_title: 'Utenti',
		allow_create_devices:
			'Permetti a {username} di creare nuovo dispositivi e gestire i gruppi di dispositivi.',
		device_permissions: 'Permessi dispositivo',
		create_new_device: 'Crea un nuovo dispositivo',
		read: 'Leggi',
		update: 'Modifica',
		delete: 'Cancella',
		power: 'Accendi',
		toggle: 'Inverti',
		confirm_delete_title: 'Conferma rimozione',
		confirm_delete_desc: 'Sei sicuro di voler rimuovere {username}?',
		create_new_user: 'Crea nuovo utente',
		username: 'Nome utente',
		password: 'Password',
		password_confirm: 'Conferma la password',
		required_field: 'Campo obbligatorio'
	},
	buttons: {
		save: 'Salva',
		delete: 'Cancella',
		change: 'Cambia',
		reset: 'Resetta',
		cancel: 'Annulla',
		add: 'Aggiungi',
		confirm: 'Conferma'
	},
	welcome: {
		step1_page_title: 'Benvenuti ad UpSnap 🥳',
		step1_setup_desc: "Per favore, completate i seguenti passi per terminare l'installazione.",
		step1_setup_btn_next: 'Avanti',
		step2_page_title: 'Creare un account amministratore',
		step2_label_email: 'Email:',
		step2_label_password: 'Password:',
		step2_label_min_chars: 'Min. 10 caratteri',
		step2_label_password_confirm: 'Conferma la password:',
		step2_btn_create: 'Crea',
		step3_page_title: 'Abbiamo finito! 🎉',
		step3_page_desc: 'Prosegui adesso per aggiungere dispositivi alla tua lista.',
		step3_btn_done: 'Andiamo!',
		not_expected_title: 'Non mi aspettavo di vederti qui! 🧐',
		not_expected_desc:
			"L' installazione e' gia' terminata! Non ci sono operazioni da svolgere qui.",
		not_expected_back: 'Indietro',
		progress_step1: 'Benvenuti',
		progress_step2: 'Creare un account',
		progress_step3: 'Fatto'
	},
	toasts: {
		admin_saved: 'Account amministratore salvato',
		user_saved: 'Account utente salvato',
		user_created: 'Utente {username} creato',
		user_deleted: 'Utente {username} cancellato',
		settings_saved: 'Impostazioni salvate',
		password_changed: 'Password cambiata. Per favore, effettuate di nuovo il login.',
		passwords_missmatch: 'Le password non corrispondono',
		permissions_created: 'I permessi per {username} sono stati creati',
		permissions_deleted: 'I permessi per {username} sono stati cancellati',
		permissions_updated: 'I permessi per {username} sono stati aggiornati',
		permissions_updated_personal: 'I tuoi permessi sono stati aggiornati',
		no_permission: 'Non hai i permessi necessari per visitare {url}',
		device_created: 'Creato dispositivo {device}',
		devices_created_multiple: 'Creato/i {count|int} dispositivi',
		device_updated: '{device} aggiornato',
		device_deleted: '{device} cancellato',
		group_created: 'Gruppo {group} creato',
		group_deleted: 'Gruppo {group} cancellato'
	},
	navbar: {
		theme: 'Tema',
		new: 'Nuovo',
		edit_account: 'Modifica accont',
		logout: 'Esci'
	}
} satisfies BaseTranslation;

export default it;
