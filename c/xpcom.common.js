/**
 * Common XPCOM STB constructor.
 * @constructor
 */
function common_xpcom(){

    this.user = {};
    this.mac = '';
    this.ip  = '';
    this.hd  = 0;
    this.type  = '';
    this.version    = '';
    this.ajax_loader  = '';
    this.images   = [];
    this.storages = {};
    this.player = {};
    this.key_lock = true;
    this.power_off = false;
    this.additional_services_on = 0;
    this.header_ua_ext = [];
    this.access_token = '';

    this.aspect_idx = 0;
    this.aspect_array = [
        {"alias": "fit", "mode": 0x10},
        {"alias": "big", "mode": 0x40},
        {"alias": "opt", "mode": 0x50},
        {"alias": "exp", "mode": 0x00},
        {"alias": "cmb", "mode": 0x30}
    ];

    this.video_mode = 1080;

    this.cur_off_on = false;

    this.cur_place = '';

    this.load_step = Math.ceil(50/4);

    this.recordings = [];

    // iso639
    this.lang_map = {
        "aa" : "aar", //Afar
        "ab" : "abk", //Abkhazian
        "af" : "afr", //Afrikaans
        "ak" : "aka", //Akan
        "sq" : "alb", //Albanian
        "am" : "amh", //Amharic
        "ar" : "ara", //Arabic
        "an" : "arg", //Aragonese
        "hy" : "arm", //Armenian
        "as" : "asm", //Assamese
        "av" : "ava", //Avaric
        "ae" : "ave", //Avestan
        "ay" : "aym", //Aymara
        "az" : "aze", //Azerbaijani
        "ba" : "bak", //Bashkir
        "bm" : "bam", //Bambara
        "eu" : "baq", //Basque
        "be" : "bel", //Belarusian
        "bn" : "ben", //Bengali
        "bh" : "bih", //Bihari languages
        "bi" : "bis", //Bislama
        "bs" : "bos", //Bosnian
        "br" : "bre", //Breton
        "bg" : "bul", //Bulgarian
        "my" : "bur", //Burmese
        "ca" : "cat", //Catalan; Valencian
        "ch" : "cha", //Chamorro
        "ce" : "che", //Chechen
        "zh" : "chi", //Chinese
        "cu" : "chu", //Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic
        "cv" : "chv", //Chuvash
        "kw" : "cor", //Cornish
        "co" : "cos", //Corsican
        "cr" : "cre", //Cree
        "cs" : "ces", //Czech
        "da" : "dan", //Danish
        "dv" : "div", //Divehi; Dhivehi; Maldivian
        "nl" : "dut", //Dutch; Flemish
        "dz" : "dzo", //Dzongkha
        "en" : "eng", //English
        "eo" : "epo", //Esperanto
        "et" : "est", //Estonian
        "ee" : "ewe", //Ewe
        "fo" : "fao", //Faroese
        "fj" : "fij", //Fijian
        "fi" : "fin", //Finnish
        "fr" : "fra", //French
        "fy" : "fry", //Western Frisian
        "ff" : "ful", //Fulah
        "ka" : "geo", //Georgian
        "de" : "deu", //German
        "gd" : "gla", //Gaelic; Scottish Gaelic
        "ga" : "gai", //Irish
        "gl" : "glg", //Galician
        "gv" : "glv", //Manx
        "el" : "ell", //Greek, Modern (1453-)
        "gn" : "grn", //Guarani
        "gu" : "guj", //Gujarati
        "ht" : "hat", //Haitian; Haitian Creole
        "ha" : "hau", //Hausa
        "he" : "heb", //Hebrew
        "hz" : "her", //Herero
        "hi" : "hin", //Hindi
        "ho" : "hmo", //Hiri Motu
        "hr" : "hrv", //Croatian
        "hu" : "hun", //Hungarian
        "ig" : "ibo", //Igbo
        "is" : "ice", //Icelandic
        "io" : "ido", //Ido
        "ii" : "iii", //Sichuan Yi; Nuosu
        "iu" : "iku", //Inuktitut
        "ie" : "ile", //Interlingue; Occidental
        "ia" : "ina", //Interlingua (International Auxiliary Language Association)
        "id" : "ind", //Indonesian
        "ik" : "ipk", //Inupiaq
        "it" : "ita", //Italian
        "jv" : "jav", //Javanese
        "ja" : "jpn", //Japanese
        "kl" : "kal", //Kalaallisut; Greenlandic
        "kn" : "kan", //Kannada
        "ks" : "kas", //Kashmiri
        "kr" : "kau", //Kanuri
        "kk" : "kaz", //Kazakh
        "km" : "khm", //Central Khmer
        "ki" : "kik", //Kikuyu; Gikuyu
        "rw" : "kin", //Kinyarwanda
        "ky" : "kir", //Kirghiz; Kyrgyz
        "kv" : "kom", //Komi
        "kg" : "kon", //Kongo
        "ko" : "kor", //Korean
        "kj" : "kua", //Kuanyama; Kwanyama
        "ku" : "kur", //Kurdish
        "lo" : "lao", //Lao
        "la" : "lat", //Latin
        "lv" : "lav", //Latvian
        "li" : "lim", //Limburgan; Limburger; Limburgish
        "ln" : "lin", //Lingala
        "lt" : "lit", //Lithuanian
        "lb" : "ltz", //Luxembourgish; Letzeburgesch
        "lu" : "lub", //Luba-Katanga
        "lg" : "lug", //Ganda
        "mk" : "mac", //Macedonian
        "mh" : "mah", //Marshallese
        "ml" : "mal", //Malayalam
        "mi" : "mao", //Maori
        "mr" : "mar", //Marathi
        "ms" : "may", //Malay
        "mg" : "mlg", //Malagasy
        "mt" : "mlt", //Maltese
        "mn" : "mon", //Mongolian
        "na" : "nau", //Nauru
        "nv" : "nav", //Navajo; Navaho
        "nr" : "nbl", //Ndebele, South; South Ndebele
        "nd" : "nde", //Ndebele, North; North Ndebele
        "ng" : "ndo", //Ndonga
        "ne" : "nep", //Nepali
        "nn" : "nno", //Norwegian Nynorsk; Nynorsk, Norwegian
        "nb" : "nob", //Bokmål, Norwegian; Norwegian Bokmål
        "no" : "nor", //Norwegian
        "ny" : "nya", //Chichewa; Chewa; Nyanja
        "oc" : "oci", //Occitan (post 1500); Provençal
        "oj" : "oji", //Ojibwa
        "or" : "ori", //Oriya
        "om" : "orm", //Oromo
        "os" : "oss", //Ossetian; Ossetic
        "pa" : "pan", //Panjabi; Punjabi
        "fa" : "fas", //Persian
        "pi" : "pli", //Pali
        "pl" : "pol", //Polish
        "pt" : "por", //Portuguese
        "ps" : "pus", //Pushto; Pashto
        "qu" : "que", //Quechua
        "rm" : "roh", //Romansh
        "ro" : "ron", //Romanian; Moldavian; Moldovan
        "rn" : "run", //Rundi
        "ru" : "rus", //Russian
        "sg" : "sag", //Sango
        "sa" : "san", //Sanskrit
        "si" : "sin", //Sinhala; Sinhalese
        "sk" : "slk", //Slovak
        "sl" : "slv", //Slovenian
        "se" : "sme", //Northern Sami
        "sm" : "smo", //Samoan
        "sn" : "sna", //Shona
        "sd" : "snd", //Sindhi
        "so" : "som", //Somali
        "st" : "sot", //Sotho, Southern
        "es" : "spa", //Spanish; Castilian
        "sc" : "srd", //Sardinian
        "sr" : "srp", //Serbian
        "ss" : "ssw", //Swati
        "su" : "sun", //Sundanese
        "sw" : "swa", //Swahili
        "sv" : "sve", //Swedish
        "ty" : "tah", //Tahitian
        "ta" : "tam", //Tamil
        "tt" : "tat", //Tatar
        "te" : "tel", //Telugu
        "tg" : "tgk", //Tajik
        "tl" : "tgl", //Tagalog
        "th" : "tha", //Thai
        "bo" : "tib", //Tibetan
        "ti" : "tir", //Tigrinya
        "to" : "ton", //Tonga (Tonga Islands)
        "tn" : "tsn", //Tswana
        "ts" : "tso", //Tsonga
        "tk" : "tuk", //Turkmen
        "tr" : "tur", //Turkish
        "tw" : "twi", //Twi
        "ug" : "uig", //Uighur; Uyghur
        "uk" : "ukr", //Ukrainian
        "ur" : "urd", //Urdu
        "uz" : "uzb", //Uzbek
        "ve" : "ven", //Venda
        "vi" : "vie", //Vietnamese
        "vo" : "vol", //Volapük
        "cy" : "wel", //Welsh
        "wa" : "wln", //Walloon
        "wo" : "wol", //Wolof
        "xh" : "xho", //Xhosa
        "yi" : "yid", //Yiddish
        "yo" : "yor", //Yoruba
        "za" : "zha", //Zhuang; Chuang
        "zu" : "zul" //Zulu
    };

    this.base_modules = [
        "reset",
        "context_menu",
        "main_menu",
        "alert",
        "speedtest",
        "layer.base",
        "layer.list",
        "layer.setting",
        "layer.simple",
        "layer.input",
        "layer.sidebar",
        "layer.search_box",
        "layer.bottom_menu",
        "layer.scrollbar",
        "layer.vclub_info",
        "image.viewer",
        "password_input",
        "series_switch",
        "duration_input"
    ];

    this.init = function(){
        _debug('stb.init');

        loader.append("reset");
        loader.append("layer.modal_form");

        this.browser = this.get_user_browser();

        this.player = new player();
        this.player.bind();
        this.get_server_params();
        this.get_stb_params();
        this.handshake();

        this.watchdog = new watchdog();

        this.usbdisk = new usbdisk();
        module.blocking.init_layer();

        connection_problem.init();
        authentication_problem.init();
    };

    this.init_auth_dialog = function(){
        this.auth_dialog = new ModalForm({"title" : get_word('auth_title')});
        this.auth_dialog.addItem(new ModalFormInput({"label" : get_word('auth_login'),    "name" : "login",    "onchange" : function(){_debug('change'); stb.auth_dialog.resetStatus()}}));
        this.auth_dialog.addItem(new ModalFormInput({"label" : get_word('auth_password'), "name" : "password", "onchange" : function(){_debug('change'); stb.auth_dialog.resetStatus()}}));
        var self = this;
        this.auth_dialog.addItem(new ModalFormButton(
            {
                "value" : "OK",
                "onclick" : function(){

                    var login    = self.auth_dialog.getItemByName("login").getValue();
                    var password = self.auth_dialog.getItemByName("password").getValue();

                    _debug("login", login);
                    _debug("password", password);

                    stb.load(
                        {
                            "type"       : "stb",
                            "action"     : "do_auth",
                            "login"      : login,
                            "password"   : password,
                            'device_id'  : stb.GetUID ? stb.GetUID() : '',
                            'device_id2' : stb.GetUID ? (stb.GetUID(self.access_token) == stb.GetUID(self.access_token, self.access_token) ? '' : stb.GetUID('device_id', self.access_token)) : ''
                        },
                        function(result){
                            _debug('auth result', result);

                            if (result){
                                stb.get_user_profile(true);
                                stb.auth_dialog.hide();
                            }else{
                                stb.auth_dialog.setStatus(get_word('auth_error'));
                            }
                        }
                    )
                }
            }
        ));
    };

    this.init_alerts = function(){
        _debug('stb.init_alerts');

        this.notice = new _alert();

        this.msg = new _alert('info');
        this.msg.bind();

        this.confirm = new _alert('confirm');
        this.confirm.bind();
    };

    this.get_server_params = function(){

        var pattern = /(https?):\/\/([^\/]*)\/([\w\/]+)*\/([\w\/]+)\/(.)*/;

        this.portal_protocol = document.URL.replace(pattern, "$1");
        this.portal_ip   = document.URL.replace(pattern, "$2");
        this.portal_path = document.URL.replace(pattern, "$3");

        _debug('stb.portal_path:', this.portal_path);

        this.ajax_loader = this.portal_protocol+'://'+this.portal_ip+'/'+this.portal_path+'/server/load.php';

        _debug('stb.ajax_loader:', this.ajax_loader);
    };

    this.get_modules = function(){
        _debug('stb.get_modules');

        this.load(

            {
                "type"   : "stb",
                "action" : "get_modules"
            },

            function(result){
                _debug('stb.get_modules callback', result);
                var all_modules = result.all_modules;
                this.switchable_modules = result.switchable_modules;

                this.disabled_modules   = result.disabled_modules   || [];
                this.restricted_modules = result.restricted_modules || [];

                this.all_modules = this.base_modules.concat(all_modules);
                _debug('all_modules', this.all_modules);

                var self = this;

                this.all_modules = this.all_modules.filter(function(module){
                    return self.disabled_modules.indexOf(module) == -1;
                });

                loader.add(this.all_modules);
            },

            this
        );
    };

    this.load_account_modules = function(){
        _debug('stb.load_account_modules');

        if (this.all_modules){
            return;
        }

        this.load(

            {
                "type"   : "stb",
                "action" : "get_modules"
            },

            function(result){
                _debug('stb.load_account_modules callback', result);

                var all_modules = result.all_modules;

                all_modules = all_modules.filter(function(module){
                    return module == 'account';
                });

                if (!all_modules){
                    return;
                }

                this.all_modules = this.base_modules.concat(all_modules);
                _debug('all_modules', this.all_modules);

                loader.add(this.all_modules);
            },

            this
        );
    };

    this.update_modules = function(){
        _debug('stb.get_modules');
        
        this.load(

            {
                "type"   : "stb",
                "action" : "get_modules"
            },

            function(result){
                _debug('update_modules result', result);

                this.switchable_modules = result.switchable_modules || [];
                this.disabled_modules   = result.disabled_modules   || [];
                this.restricted_modules = result.restricted_modules || [];
            },

            this
        );
    };

    this.is_restricted_module = function(module){
        _debug('stb.is_restricted_module');
        _debug('module.layer_name', module.layer_name);

        _debug('this.additional_services_on', this.additional_services_on);

        if (this.restricted_modules.indexOf(module.layer_name) >= 0){
            return true;
        }

        if (!this.additional_services_on && this.switchable_modules.indexOf(module.layer_name) >= 0){
            return true;
        }

        return false;
    };

    this.check_additional_services = function(param){
        _debug('check_additional_services', param);

        this.additional_services_on = parseInt(param, 10);
    };

    this.get_stb_params = function (){

        try{

            this.video_mode   = stb.RDir('vmode');
            //this.graphic_mode = stb.RDir('gmode');

            //this.mac = stb.RDir('MACAddress').toUpperCase().clearnl();
            try{
                this.mac = stb.GetDeviceMacAddress().toUpperCase().clearnl();
            }catch(e){
                _debug('this.mac use old API');
                this.mac = stb.RDir('MACAddress').toUpperCase().clearnl();
            }

            this.ip  = stb.RDir('IPAddress').clearnl();

            try{
                this.serial_number  = stb.GetDeviceSerialNumber().clearnl();
            }catch(e){
                _debug('this.serial_number use old API');
                this.serial_number  = stb.RDir('SerialNumber').clearnl();
            }

            try{
                this.type = stb.GetDeviceModelExt().clearnl();
            }catch(e){
                _debug('this.type use old API');
                this.type = stb.RDir('Model').clearnl();
            }

            this.header_ua_ext.push('Model: ' + this.type);

            this.stb_lang = stb.RDir('getenv language').clearnl();
            
            this.timezone = stb.RDir('getenv timezone_conf').clearnl();
            
            this.ntp_server = stb.RDir('getenv ntpurl').clearnl();

            this.firmware_version = this.image_version = stb.RDir('ImageVersion').clearnl();
            this.image_desc    = stb.RDir('ImageDescription').clearnl();
            this.image_date    = stb.RDir('ImageDate').clearnl();

            this.version = 'ImageDescription: ' + this.image_desc + '; ImageDate: ' + this.image_date + '; PORTAL version: '+ver+'; API Version: ' + stb.Version();

            this.hw_version = stb.GetDeviceVersionHardware ? stb.GetDeviceVersionHardware() : '';

            var mtdparts = stb.RDir('getenv mtdparts').clearnl();

            this.num_banks = mtdparts.indexOf('RootFs2') > 0 ? 2 : 1;

            if (this.type == 'MAG200' || this.type == 'MAG250' || this.type.indexOf('AuraHD') != -1){
                this.hd = 1;
            }else{
                this.hd = 0;
            }

            if (this.graphic_mode >= 720){
                _debug('gSTB.SetObjectCacheCapacities');
                gSTB.SetObjectCacheCapacities(1000000, 7000000, 10000000);
            }

            if (stb.GetWifiLinkStatus){
                var link = [];

                if (stb.GetLanLinkStatus()){
                    link.push('Ethernet');
                }

                if (stb.GetWifiLinkStatus()){
                    link.push('WiFi');
                }

                this.header_ua_ext.push('Link: '+link.join(','));
            }
            
        }catch(e){
            _debug(e);
        }

        if (debug){

            if (_GET['mac']){
                this.mac = _GET['mac'];
                this.set_cookie('mac_emu', 1);
            }

            this.set_cookie('debug', 1);

            if (_GET['debug_key']){
                this.set_cookie('debug_key', _GET['debug_key']);
            }

        }

        this.set_cookie('mac',      this.mac);
        this.set_cookie('stb_lang', this.stb_lang);
        this.set_cookie('timezone', this.timezone);
        /*this.set_cookie('stb_type', this.type);
        this.set_cookie('sn',       this.serial_number);
        this.set_cookie('num_banks',this.num_banks);*/

        //this.get_localization();

        _debug('this.mac:', this.mac);
        _debug('this.serial_number:', this.serial_number);
        _debug('this.stb_lang:', this.stb_lang);
        _debug('this.timezone:', this.timezone);
        _debug('this.ntp_server:', this.ntp_server);
        _debug('this.ip:', this.ip);
        _debug('this.type:', this.type);
        _debug('this.version:', this.version);
        _debug('this.hd:',this.hd);
    };

    this.set_cookie = function(name, val){
        document.cookie = name + '=' + encodeURIComponent(val) + '; path=/;';
    };

    this.delete_cookie = function(name){
        document.cookie = name + '=; path=/; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
    };

    this.get_localization = function(){
        _debug('stb.get_localization');

        this.load(
            {
                "type"   : "stb",
                "action" : "get_localization"
            },

            function(result){

                word = result;
                //this.clock.start();

                this.user_init(this.profile);

                this.clock.start();
                this.player.ClockOnVideo.init();

                connection_problem.refresh_msg();
                authentication_problem.refresh_msg();
            },

            this
        )
    };

    /**
     * Ajax wrapper.
     * @param params
     * @param {...} var_args
     */
    /*this.load = function(params, var_args){
        _debug('stb.load()');
        _debug('params:', params);

        var callback = arguments[1];

        var context = window;

        if (arguments.length == 3){
            context = arguments[2];
        }

        try{

            return JsHttpRequest.query(

                //this.ajax_loader,
                'GET '+this.ajax_loader,

                params,

                function(result, errors){
                    _debug('stb.load callback');
                    _debug(errors);
                    try{
                        callback.call(context, result);
                    }catch(e){
                        _debug(e);
                    }
                },

                true
            );
        }catch(e){
            _debug(e);
        }
    };*/

    this.load = function(params, var_args){
        _debug('stb.load()');
        _debug('params:', params);

        var callback = arguments[1];

        var context = window;
        var method = 'GET';

        if (arguments.length == 3){
            context = arguments[2];
        }

        if (arguments.length == 4){
            method = arguments[3];
        }

        try{

            var req = new XMLHttpRequest();

            if (method == 'POST'){
                req.open("POST", this.ajax_loader + '?JsHttpRequest='+(new Date().getTime())+'-xml', true);
                req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            }else{
                req.open("GET", this.ajax_loader + '?' + this.params_to_query(params), true);
            }

            if (this.header_ua_ext.length > 0){
                req.setRequestHeader("X-User-Agent", stb.header_ua_ext.join('; '));
            }

            if (this.access_token){
                req.setRequestHeader("Authorization", "Bearer " + this.access_token);
            }

            req.onreadystatechange = function(){
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        try{
                            var result = JSON.parse(req.responseText);
                            req = null;
                        }catch(er){
                            _debug('req.responseText', req.responseText);
                            if (req.responseText == 'Authorization failed.'){
                                authentication_problem.show();
                            }
                            throw new Error(er);
                        }
                        _debug(result.text);
                        connection_problem.hide();
                        authentication_problem.hide();
                        callback.call(context, result.js);
                        result = null;
                    } else if (req.status == 0){
                        console.log('Abort request');
                        //connection_problem.show();
                    }else{
                        connection_problem.show();
                        console.log('req.status: '+req.status);
                        console.log(req.responseText);
                    }
                    req = null;
                }
            };
            if (method == 'POST'){
                req.send(this.params_to_query(params));
            }else{
                req.send(null);
            }
        }catch(e){
            req = null;
            console.log(e);
        }

        return req;
    };

    this.params_to_query = function(params){
        var query = [];

        if (!params){
            return null;
        }

        //params['JsHttpRequest'] = (new Date().getTime())+'-xml';
        params['JsHttpRequest'] = '1-xml';

        for (var key in params){
            if (params.hasOwnProperty(key)){

                if (params[key] === false){
                    params[key] = 0;
                }else if (params[key] === true){
                    params[key] = 1;
                }

                query.push(key + '=' + params[key]);
            }
        }

        return query.join('&');
    };

    this.preload_images = function(){

        this.load(

            {
                'type'   : 'stb',
                'action' : 'get_preload_images',
                'gmode'  : resolution_prefix.substr(1)
            },

            function(result){
                if (result != null){
                    for (var i=0; i<result.length; i++){
                        stb.images[i] = new Image();
                        stb.images[i].src = result[i];
                        stb.images.onload = function(){};
                    }
                }
            }
        );
    };

    this.hashCode = function(s){
        return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    };

    this.get_saved_access_token = function(){
        _debug('stb.get_saved_access_token');

        var file = 'stalker_'+this.hashCode(window.location.origin+window.location.pathname);

        if (!stb.LoadUserData){
            return;
        }

        var data = stb.LoadUserData(file) || "{}";

        try{
            data = JSON.parse(data)
        }catch(e){
            _debug(e);
        }
        data = data || {};

        return data.token;
    };

    this.save_access_token = function(){
        _debug('stb.save_access_token');

        var file = 'stalker_'+this.hashCode(window.location.origin+window.location.pathname);

        if (!stb.SaveUserData){
            return;
        }

        stb.SaveUserData(file, JSON.stringify({"token" : this.access_token}));
    };

    this.handshake = function(){
        _debug('stb.handshake');

        this.load(
            {
                "type"   : "stb",
                "action" : "handshake",
                "token"  : this.get_saved_access_token() || ''
            },
            function(result){
                _debug('on handshake', result);
                this.access_token = result.token || '';

                this.not_valid_token = result.not_valid || 0;

                _debug('this.access_token', this.access_token);

                this.get_user_profile();
            },
            this
        )
    };

    this.get_user_profile = function(auth_second_step){
        _debug('this.get_user_profile', auth_second_step);

        this.load(

            {
                'type'             : 'stb',
                'action'           : 'get_profile',
                'hd'               : this.hd,
                'ver'              : this.version,
                'num_banks'        : this.num_banks,
                'sn'               : this.serial_number,
                'stb_type'         : this.type,
                'image_version'    : this.image_version,
                'device_id'        : stb.GetUID ? stb.GetUID() : '',
                'device_id2'       : stb.GetUID ? (stb.GetUID(this.access_token) == stb.GetUID(this.access_token, this.access_token) ? '' : stb.GetUID('device_id', this.access_token)) : '',
                'signature'        : stb.GetUID ? stb.GetUID(this.access_token) : '',
                'auth_second_step' : auth_second_step ? 1 : 0,
                'hw_version'       : this.hw_version,
                'not_valid_token'  : this.not_valid_token ? 1 : 0
            },

            function(result){
                if (result != null){
                    this.profile = result;
                    //this.user_init(result);
                    this.get_localization();


                }
            },

            this
        )
    };

    this.get_user_browser = function(){
        var ua = navigator.userAgent.toLowerCase();

        if (ua.indexOf("webkit") != -1) {
            return "webkit"
        }else if (ua.indexOf("firefox") != -1){
            return "firefox"
        }else{
            return "na"
        }
    };

    this.check_image_version = function(){

        /*var cur_version = this.image_version;
        this.firmware_version = cur_version;*/
        _debug('this.image_version:', this.image_version);
        _debug('this.image_desc:', this.image_desc);
        _debug('this.image_date:', this.image_date);
        _debug('this.num_banks:', this.num_banks);
        _debug('this.hw_version:', this.hw_version);
        //_debug('stb.user.image_version:', stb.user['image_version']);

        if (this.image_version < 203 && this.image_version != 0){
            return;
        }

        _debug('checking conditions');
        _debug('typeof stb.user[autoupdate]', typeof(stb.user['autoupdate']));
        _debug('stb.user[autoupdate] is array', stb.user['autoupdate'] && stb.user['autoupdate'] instanceof Array);

        if (stb.user['autoupdate'] && stb.user['autoupdate'] instanceof Array){
            stb.user['autoupdate'].some(function(element){
                return stb.check_update(element);
            });
        }
    };

    this.check_update = function(params){
        _debug('stb.check_update', params);

        if (typeof params == 'object' &&
            (
                (params.require_image_version != '' && params.require_image_version != this.image_version) ||
                (params.require_image_date != ''    && params.require_image_date != this.image_date)
            ) &&
            (
                (params.image_version_contains == ''     || params.image_version_contains == this.image_version) &&
                (params.image_description_contains == '' || this.image_desc.indexOf(params.image_description_contains) != -1) &&
                (params.hardware_version_contains == ''  || this.hw_version.indexOf(params.hardware_version_contains) != -1)
            )
           ){

            _debug('checking conditions 2');

            if (this.num_banks == 2 && params.update_type == 'http_update'){
                try{
                    _debug('this.user[update_url]', this.user['update_url']);

                    _debug('stb.user[autoupdate]', stb.user['autoupdate']);

                    this.user['update_url'] = this.user['update_url'].replace(/\/imageupdate$/, '/'+params.prefix+'imageupdate');

                    _debug('this.user[update_url] 2', this.user['update_url']);

                    stbUpdate.startAutoUpdate(this.user['update_url'], false);

                }catch(e){
                    _debug(e);
                }
            }else if (params.update_type == 'reboot_dhcp'){
                _debug('RebootDHCP');
                stb.ExecAction('RebootDHCP');
            }

            return true;
        }

        return false;
    };

    this.user_init = function(user_data){

        stb.loader.add_pos(this.load_step, 'call stb.user_init');

        this.user = user_data;

        _debug('this.user:', user_data);

        _debug('this.user[deny_720p_gmode_on_mag200]', this.user['deny_720p_gmode_on_mag200']);
        _debug('this.type', this.type);
        _debug('screen.height', screen.height);

        if (this.user['deny_720p_gmode_on_mag200'] && this.type == 'MAG200' && screen.height >= 720){
            stb.ExecAction('graphicres 720');
            _debug('Reboot');
            stb.ExecAction('reboot');
        }

        screensaver.init();

        if (this.user['allowed_stb_types'] && !this.profile['strict_stb_type_check'] && this.user['allowed_stb_types'].indexOf('aurahd') !== -1){
            var cut_type = this.type.indexOf('AuraHD') != -1 ? 'AuraHD' : this.type;
        }else{
            cut_type = this.type;
        }

        if (this.user['allowed_stb_types'] && this.user['allowed_stb_types'].indexOf(cut_type.toLowerCase()) == -1 && !_GET['debug_key']){

            stb.loader.stop();
            this.cut_off(get_word('stb_type_not_supported'));

            return;
        }

        if (this.user['store_auth_data_on_stb']){
            this.save_access_token();
        }

        if (this.user['status'] == 2){
            this.init_auth_dialog();
            this.key_lock = false;
            this.auth_dialog.show();

            loader.append('alert');

        }else if (this.user['status'] == 0){
            try{

                //if (this.type == 'MAG200'){

                /*if (!this.check_graphic_res()){
                    return;
                }*/

                //this.get_localization();

                this.usbdisk.init();

                this.preload_images();

                this.player.volume.set_level(parseInt(this.user['volume'], 10));

                this.player.setup_rtsp(this.user['rtsp_type'], this.user['rtsp_flags']);

                this.player.ad_indication.init();
                this.player.ad_skip_indication.init();

                if (this.user.hasOwnProperty('cas_type')){
                    this.player.set_cas(this.user);
                }

                this.user.fav_itv_on = parseInt(this.user.fav_itv_on, 10);

                this.user['aspect']    = stb.player.ch_aspect_idx = parseInt(this.user['aspect'],    10);
                this.user['audio_out'] = parseInt(this.user['audio_out'], 10);

                stb.user['playback_limit'] = parseInt(this.user['playback_limit'], 10);

                this.user['screensaver_delay'] = parseInt(this.user['screensaver_delay'], 10);
                this.user['watchdog_timeout']  = parseInt(this.user['watchdog_timeout'], 10);
                this.user['tv_playback_retry_limit']  = parseInt(this.user['tv_playback_retry_limit'], 10);
                this.user['timeslot']          = parseFloat(this.user['timeslot']);
                this.user['timeslot_ratio']    = parseFloat(this.user['timeslot_ratio']);

                this.profile['plasma_saving_timeout'] = parseInt(this.profile['plasma_saving_timeout'], 10);

                //this.user['update_url'] = this.profile['update_url'] ? this.profile['update_url'] + this.type.substr(3) + '/imageupdate' : 'http://mag.infomir.com.ua/' + this.type.substr(3) + '/imageupdate';

                if (!this.user['update_url']){
                    try{
                        this.user['update_url'] = stb.RDir('getenv update_url').clearnl();
                    }catch(err){
                        _debug(err);
                    }
                }

                var aspect_idx = this.aspect_array.getIdxByVal('alias', this.profile['tv_channel_default_aspect']);
                if (aspect_idx === null){
                    this.profile['tv_channel_default_aspect'] = 0x10;
                }else{
                    this.profile['tv_channel_default_aspect'] = this.aspect_array[aspect_idx].mode;
                }

                _debug('this.user[update_url]', this.user['update_url']);

                if (['MAG200', 'MAG245', 'MAG250', 'MAG254', 'MAG255', 'MAG270', 'MAG275'].indexOf(this.type) >= 0 || this.type.indexOf('AuraHD') != -1){
                    this.check_image_version();
                }

                this.epg_loader.start();

                this.locale = this.user.locale;

                if (!this.user['pri_audio_lang']){
                    this.user['pri_audio_lang'] = this.lang_map.hasOwnProperty(this.stb_lang) ? this.lang_map[this.stb_lang] : '';
                    this.user['sec_audio_lang'] = this.lang_map.hasOwnProperty(this.user.stb_lang) ? this.lang_map[this.user.stb_lang] : '';

                    if (this.user['pri_audio_lang'] == this.user['sec_audio_lang']){
                        var default_lang = this.user['default_locale'].substr(0, 2);
                        _debug('default_lang', default_lang);
                        this.user['sec_audio_lang'] = this.lang_map.hasOwnProperty(default_lang) ? this.lang_map[default_lang] : '';
                    }
                }

                this.player.set_audio_langs(
                    this.user['pri_audio_lang'],
                    this.user['sec_audio_lang']
                );

                if (!this.user['pri_subtitle_lang']){
                    this.user['pri_subtitle_lang'] = this.user['pri_audio_lang'];
                    this.user['sec_subtitle_lang'] = this.user['sec_audio_lang'];
                }

                this.player.set_subtitle_langs(
                    this.user['pri_subtitle_lang'],
                    this.user['sec_subtitle_lang']
                );

                this.stb_lang = this.user.stb_lang;

                this.aspect_idx = this.aspect_array.getIdxByVal('mode', this.user['aspect']);

                this.check_additional_services(this.user['additional_services_on']);

                if (this.aspect_idx == null){
                    this.aspect_idx = 0;
                }

                try{

                    var timezone = stb.RDir('getenv timezone_conf');

                    _debug('timezone', timezone);

                    if (this.user['default_timezone'] && !timezone){
                        _debug('setenv timezone_conf '+this.user['default_timezone']);
                        stb.RDir('setenv timezone_conf '+this.user['default_timezone']);
                    }

                    _debug('stb.GetBrightness before', stb.GetBrightness());
                    _debug('stb.GetContrast before', stb.GetContrast());
                    _debug('stb.GetSaturation before', stb.GetSaturation());

                    if (this.stb_type == 'MAG200'){
                        stb.SetBrightness(127);
                        stb.SetContrast(-27);
                        stb.SetSaturation(100);
                    }

                    _debug('stb.GetBrightness after', stb.GetBrightness());
                    _debug('stb.GetContrast after', stb.GetContrast());
                    _debug('stb.GetSaturation after', stb.GetSaturation());

                    stb.SetAspect(this.user['aspect']);

                    stb.SetBufferSize(this.user['playback_buffer_size'], this.user['playback_buffer_bytes']);

                    this.user['playback_buffer_size'] = this.user['playback_buffer_size'] / 1000;

                    stb.SetupSPdif(this.user['audio_out']);

                    stb.EnableAppButton && stb.EnableAppButton(false);

                    //stb.SetWebProxy(string proxy_addr,int proxy_port,string user_name,string passwd,string exclude_list);
                    if (this.user['web_proxy_host']){
                        stb.SetWebProxy && stb.SetWebProxy(this.user['web_proxy_host'], this.user['web_proxy_port'], this.user['web_proxy_user'], this.user['web_proxy_pass'], this.user['web_proxy_exclude_list']);
                    }

                    stb.EnableServiceButton(!!this.user['enable_service_button']);

                    if (gSTB.SetSettingsInitAttr){
                        gSTB.SetSettingsInitAttr(JSON.stringify({
                            url: '/home/web/system/settings/index.html',
                            backgroundColor: '#000'
                        }));
                    }

                    stb.EnableVKButton(true);

                }catch(e){
                    _debug(e);
                }

                this.get_modules();

                //this.mount_home_dir(this.user['storages']);
                this.set_storages(this.user['storages']);
                stb.loader.add_pos(this.load_step, 'call stb.mount_home_dir');

                this.load_channels();
                this.load_fav_channels();
                this.load_fav_itv();
                this.load_recordings();

            }catch(e){
                _debug(e);
            }
        }else if(this.user['status'] == 1){
            stb.loader.stop();
            this.cut_off(this.user.hasOwnProperty('block_msg') ? this.user['block_msg'] : '');
            loader.append('alert');
        }

        this.watchdog.run(this.user['watchdog_timeout'], this.user['timeslot']);
    };

    this.on_first_menu_show = function(){};

    this.post_loading_handle = function(){
        _debug('stb.post_loading_handle');

        _debug('this.user[display_menu_after_loading]', this.user['display_menu_after_loading']);

        this.key_lock = false;

        if (single_module && module[single_module]){
            module[single_module]._show && module[single_module]._show() || module[single_module].show && module[single_module].show();
            return;
        }

        this.player.init_first_channel();

        if (this.user['display_menu_after_loading'] || !this.player.channels || this.player.channels.length == 0){
            main_menu.show();
            this.on_first_menu_show();
        }else{
            this.player.first_play();
        }
    };

    this.mount_home_dir = function(storages){
        _debug('stb.mount_home_dir: ', storages);

        this.set_storages(storages);

        stb.loader.add_pos(this.load_step, 'call stb.mount_home_dir');

        for(var i in storages){
            if (storages.hasOwnProperty(i)){
                stb.ExecAction('make_dir /media/'+storages[i]['storage_name']);

                var mount_cmd = '"'+storages[i]['storage_ip']+':'+storages[i]['nfs_home_path']+stb.mac+'" /media/'+storages[i]['storage_name'];
                _debug('mount_cmd: '+mount_cmd);

                try{
                    stb.ExecAction('mount_dir '+mount_cmd);
                }catch(e){
                    _debug(e);
                }
            }
        }
    };

    this.set_storages = function(storages){
        _debug('stb.set_storages', storages);

        this.storages = this.user['storages'] = storages;
    };

    this.remount_storages = function(callback){
        _debug('stb.remount_storages');

        stb.load(
            {
                "type"   : "stb",
                "action" : "get_storages"
            },

            function(result){
                _debug('storages', result);

                this.set_storages(result);

                //this.mount_home_dir(this.user['storages']);

                callback();
            },

            this
        );
    };

    this.Mount = function(link_cmd){
        _debug('stb.Mount', link_cmd);

        var mounted_storage = link_cmd.replace(/[\s\S]*\/media\/(.*)\/(.*)/ , "$1");

        if (mounted_storage == this.mounted_storage){
            _debug('clear Umount Timeout', mounted_storage);
            window.clearTimeout(stb.player.umount_timer);
        }

        this.mounted_storage = mounted_storage;

        _debug('stb.mounted_storage', this.mounted_storage);
        try{
            gSTB.ExecAction('make_dir /media/'+this.mounted_storage);
            var mount_cmd = '"' + this.storages[this.mounted_storage]['storage_ip'] + ':' + this.storages[this.mounted_storage]['nfs_home_path'] + this.mac + '" /media/' + this.mounted_storage;
            gSTB.ExecAction('mount_dir '+mount_cmd);
        }catch(e){
            _debug(e);
        }
    };

    this.Umount = function(storage){
        _debug('stb.Umount', storage);
        //_debug('stb.mounted_storage', this.mounted_storage);

        if (storage){
            try{
                gSTB.ExecAction('umount_dir /media/'+storage);
                //this.mounted_storage = '';
            }catch(e){
                _debug(e);
            }
        }
    };

    this.switchPower = function(){
        _debug('stb.switchPower()');

        if(this.power_off){
            //this.StandBy(0);
            this.power_off = false;
            keydown_observer.emulate_key(key.MENU);
            this.clock && this.clock.show && this.clock.show();

            this.StandBy(0);

            if (!this.user['display_menu_after_loading']){
                main_menu.hide();
                stb.player.play_last();
            }

        }else{
            keydown_observer.emulate_key(key.MENU);
            this.StandBy(1);
            this.power_off = true;
            this.setFrontPanel('');
        }
    };

    this.get_image_version = function(){
        _debug('get_image_version');

        var ver = '';

        try{
            var full_ver = stb.RDir('Img_Ver');

            _debug('full_ver:', full_ver);

            var pattern = /ImageVersion:\s([^\s]*)\s(.*)/;

            var short_ver = full_ver.replace(pattern, "$1");

            if (short_ver.length < 30){
                ver = short_ver.clearnl();
            }

            _debug('ver:', ver);

        }catch(e){
            _debug(e);
        }

        return ver;
    };

    this.check_graphic_res = function(){
        _debug('check_graphic_res');

        try{
            //var gres = stb.RDir('gmode');

            //_debug('gres:', gres);

            var res = {
                "r480" :{
                    "w"        : 720,
                    "h"        : 480,
                    "window_w" : 720,
                    "window_h" : 480,
                    "prefix"   : '_480'
                },
                "r576" :{
                    "w"        : 720,
                    "h"        : 576,
                    "window_w" : 720,
                    "window_h" : 576,
                    "prefix"   : ''
                },
                "r720" : {
                    "w"        : 1280,
                    "h"        : 720,
                    "window_w" : 1280,
                    "window_h" : 720,
                    "prefix"   : '_720'

                },
                "r1080" : {
                    "w"        : 1920,
                    "h"        : 1080,
                    "window_w" : 1280,
                    "window_h" : 720,
                    "prefix"   : '_720'
                }
            };

            if (typeof(Proxy) !== "undefined" && gSTB && typeof(gSTB.prototype) === "function"){
                var gres = window.innerHeight;
            }else{
                gres = screen.height;
            }

            this.graphic_mode = gres;

            _debug('gres', gres);

            //if (gres == '720'){
            if (res["r"+gres]){

                resolution_prefix = res["r"+gres].prefix;
                _debug('resolution_prefix', resolution_prefix);

                window.resizeTo(res["r"+gres].window_w, res["r"+gres].window_h);

                _debug('window.moveTo', (res["r"+gres].w - res["r"+gres].window_w)/2, (res["r"+gres].h - res["r"+gres].window_h)/2);
                window.moveTo((res["r"+gres].w - res["r"+gres].window_w)/2, (res["r"+gres].h - res["r"+gres].window_h)/2);

                //window.resizeTo(res["r"+gres].window_w, res["r"+gres].window_h);

                if (gres == 1080 && !window.referrer){
                    stb.ExecAction('graphicres 1280');
                }else{
                    return 1;
                }
            }else{
                stb.ExecAction('graphicres 720');
            }

            _debug('Reboot');
            stb.ExecAction('reboot');
            return 0;


            /*if (gres != '720'){

                _debug('window.referrer', window.referrer);

                if (stb.type == 'MAG200'){
                    if (window.referrer){
                        window.resizeTo(720, 576);
                        if (res["r"+gres]){
                            _debug('window.moveTo', (res["r"+gres].w - 720)/2, (res["r"+gres].h - 576)/2);
                            window.moveTo((res["r"+gres].w - 720)/2, (res["r"+gres].h - 576)/2);
                        }
                    }else{
                        //_debug('Reboot');
                        //stb.ExecAction('graphicres 720');
                        //stb.ExecAction('reboot');
                        //return 0;
                    }
                }
            }*/
        }catch(e){
            _debug(e);
            return 1;
        }
    };

    this.load_channels = function(){

        this.load(

            {
                'type'  : 'itv',
                'action': 'get_all_channels'
            },

            function(result){
                _debug('all_channels', result);

                stb.loader.add_pos(this.load_step, 'channels loaded');

                this.player.channels = result.data || [];
                this.channels_loaded();

                if (this.player.is_tv){

                    var ch_idx = this.player.channels.getIdxByVal('id', this.player.cur_media_item.id);

                    if (ch_idx !== null){
                        this.player.cur_media_item = this.player.cur_tv_item = this.player.channels[ch_idx];

                        if (this.player.cur_tv_item.lock != '1'){
                            this.player.last_not_locked_tv_item = this.player.cur_tv_item;
                        }

                        if (this.player.on){
                            this.player.play(this.player.cur_tv_item);
                        }
                    }

                }
            },

            this
        )
    };

    this.load_fav_channels = function(){

        this.load(

            {
                'type'  : 'itv',
                'action': 'get_all_fav_channels',
                'fav'   : 1
            },

            function(result){
                _debug('all_fav_channels', result);

                stb.loader.add_pos(this.load_step, 'fav_channels loaded');

                this.player.fav_channels = result.data || [];
                this.channels_loaded();
            },

            this
        )
    };

    this.load_fav_itv = function(){

        this.load(

            {
                'type'   : 'itv',
                'action' : 'get_fav_ids'
            },

            function(result){
                _debug('fav_itv_ids', result);
                this.player.fav_channels_ids = result || [];
                if (this.player.fav_channels_ids.length == 0){
                    this.user.fav_itv_on = 0;
                }
                this.channels_loaded();
            },

            this
        )
    };

    this.load_recordings = function(){
        _debug('stb.load_recordings');

        stb.load(
            {
                "type"    : "remote_pvr",
                "action"  : "get_active_recordings"
            },
            function(result){
                _debug('load_recordings result', result);

                this.recordings = result || [];

                if (typeof(pvrManager) == "undefined"){
                    var active_tasks = [];
                }else{
                    active_tasks = JSON.parse(pvrManager.GetAllTasks()) || [];
                }

                _debug('active_tasks', active_tasks);

                _debug('this.recordings before', this.recordings);

                var now_ts = Math.ceil(new Date().getTime()/1000);

                _debug('now_ts', now_ts);

                /*this.recordings = this.recordings.filter(function(task){
                    return task.local == 0 || active_tasks.getIdxByVal('fileName', task.file) !== null && now_ts < task.t_stop_ts || now_ts < task.t_start_ts;
                });*/

                _debug('this.recordings after', this.recordings);

                stb.player.on_play = function(ch_id){
                    _debug('player.on_play', ch_id);

                    if (stb.player.is_tv){

                        var rec_idx = stb.recordings.getIdxByVal('ch_id', ch_id);

                        if(rec_idx !== null){

                            var now_ts = Math.ceil(new Date().getTime()/1000);

                            _debug('now_ts', now_ts);

                            if (stb.recordings[rec_idx].local == 0 || (stb.recordings[rec_idx].t_start_ts < now_ts && stb.recordings[rec_idx].t_stop_ts > now_ts)){
                                stb.player.show_rec_icon(stb.recordings[rec_idx]);
                            }else{
                                stb.player.hide_rec_icon();
                            }

                        }else{
                            stb.player.hide_rec_icon();
                        }
                    }else{
                        stb.player.rec.hide();
                    }
                }
            },
            this
        )
    };

    this.channels_loaded = function(){

        /*if (this.channels_inited){
            return;
        }

        if (typeof(this.player.channels) != 'undefined' &&
            typeof(this.player.fav_channels) != 'undefined' &&
            typeof(this.player.fav_channels_ids) != 'undefined'){


            if (this.user.fav_itv_on){
                this.player.f_ch_idx = this.player.fav_channels.getIdxById(this.user.last_itv_id);
                if (this.player.f_ch_idx === null){
                    this.player.f_ch_idx = 0;
                }
                var channel = this.player.fav_channels[this.player.f_ch_idx];
            }else{
                this.player.ch_idx = this.player.channels.getIdxById(this.user.last_itv_id);
                if (this.player.ch_idx === null){
                    this.player.ch_idx = 0;
                }
                var channel = this.player.channels[this.player.ch_idx];
            }

            this.player.need_show_info = 1;
            this.player.play(channel);

            this.key_lock = false;
            this.channels_inited = 1;
        }*/
    };

    this.log_stream_error = function(ch_id, event){

        this.load(
            {
                "type"   : "stb",
                "action" : "set_stream_error",
                "ch_id"  : ch_id,
                "event"  : event
            },
            function(result){

            },
            this
        );
    };

    this.epg_loader = {

        timeout  : 21600000, // 6h
        timer_id : 0,
        epg : [],

        start : function(){
            _debug('epg_loader.start');

            this.load();
            var self = this;
            this.timer_id = window.setInterval(function(){self.load()}, (stb.type == 'MAG200' ? 3 : 6)*3600000);
        },

        stop : function(){
            _debug('epg_loader.stop');

            window.clearInterval(this.timer_id);
        },

        load : function(){
            _debug('epg_loader.load');

            this.epg = [];

            stb.load(
                {
                    "type"   : "itv",
                    "action" : "get_epg_info",
                    "period" : stb.type == 'MAG200' ? 3 : 6
                },

                function(result){
                    this.set_epg(result.data);
                },

                this
            )
        },

        set_epg : function(data){
            _debug('epg_loader.set_epg', data);
            this.epg = data;
            _debug('typeof(this.epg)', typeof(this.epg));
        },

        get_curr_and_next : function(ch_id, from_ts, length){
            _debug('epg_loader.get_curr_and_next', ch_id, from_ts, length);

            length = length || 2;

            ch_id = ''+ch_id;

            _debug('typeof(ch_id)', typeof(ch_id));

            if (!from_ts){
                var now = Date.parse(new Date())/1000;
            }else{
                now = parseInt(from_ts, 10);
            }
            var result = [];

            _debug('now', now);
            _debug('this.epg[ch_id]', this.epg[ch_id]);
            _debug('typeof this.epg[ch_id]', typeof(this.epg[ch_id]));

            try{
                if (typeof(this.epg[ch_id]) == 'object' && this.epg[ch_id].length > 0){
                    _debug('this.epg[ch_id].length: '+this.epg[ch_id].length);
                    for (var i=0; i < this.epg[ch_id].length; i++){
                        _debug('i', i);
                        if (this.epg[ch_id][i]['start_timestamp'] < now){
                            _debug('continue');
                        }else if (this.epg[ch_id][i]['start_timestamp'] == now){
                            _debug('==');
                            result.push(this.epg[ch_id][i]);

                            for (var j = 0; j < length - 1; j++){
                                if (typeof(this.epg[ch_id][i+1+j]) == 'object'){
                                    result.push(this.epg[ch_id][i+1+j]);
                                }
                            }
                            return result;
                        }else{
                            if (typeof(this.epg[ch_id][i-1]) == 'object'){
                                result.push(this.epg[ch_id][i-1]);

                                for (var j = 0; j < length - 1; j++){
                                    if (typeof(this.epg[ch_id][i + j]) == 'object'){
                                        result.push(this.epg[ch_id][i + j]);
                                    }
                                }
                            }else{
                                result.push(this.epg[ch_id][i]);
                            }

                            return result;
                        }
                    }
                }
            }catch(e){
                _debug(e);
            }
            return [];
        },

        get_epg : function(ch_id){
            _debug('epg_loader.get_epg', ch_id);

            var epg = this.get_curr_and_next(ch_id);

            return this.get_osd_info(epg);
        },

        get_osd_info : function(programs){
            _debug('epg_loader.get_osd_info', programs);

            var epg_str = '';

            programs.map(function(prog, idx){

                if (idx != 0){
                    epg_str += '<br>';
                }

                epg_str += prog.t_time + ' ' + prog.name;
            });

            return epg_str;
        },

        get_cur_program : function(ch_id){
            _debug('epg_loader.get_cur_program', ch_id);

            var epg = this.get_curr_and_next(ch_id);

            if (epg && epg.length > 0){
                return epg[0];
            }

            return null;
        }
    };

    this.cut_off = function(msg){
        _debug('stb.cut_off');

        if (module.blocking.on){
            return;
        }

        _log('cut_off()');

        this.key_lock = false;

        this.player.stop();

        if(this.cur_layer){
            this.cur_layer.on = false;
        }

        stb.SetDefaultFlicker && stb.SetDefaultFlicker(1);

        /*var text_msg = create_block_element('cut_off_text', this.cut_off.dom_obj);
        text_msg.innerHTML = get_word('cut_off_msg');*/

        module.blocking.show(msg);
    };

    this.cut_on = function(){
        _debug('stb.cut_on');

        if (module.blocking.on){
            stb.ExecAction('reboot');
        }
    };

    this.set_cur_place = function(place){
        this.cur_place = place;
    };

    this.reset_cur_place = function(place){
        this.cur_place = '';
    };

    this.set_cur_layer = function(obj){
        this.cur_layer = obj;
    };

    this.get_current_place = function(){

        var cur_place_num = 0;

        _debug('stb.player.media_type', this.player.media_type);
        _debug('stb.cur_place', this.cur_place);

        if(this.player.media_type == 'stream'){ // TV
            if (this.player.on){
                if (this.cur_place == 'tv'){
                    if (this.player.active_time_shift){
                        cur_place_num = 14;
                    }else{
                        cur_place_num = 1;
                    }
                }else if(this.cur_place == 'radio'){ // Radio
                    cur_place_num = 5;
                }else if(this.cur_place == 'vclub'){
                    cur_place_num = 2;
                }else if (this.cur_place == 'epg_simple' || this.cur_place == 'epg'){ // TV archive
                    cur_place_num = 11;
                }else{
                    cur_place_num = 1;
                }
            }
        }else if(this.player.media_type == 'file'){
            if (this.player.on){
                if (this.cur_place == 'vclub'){ // Video Club
                    cur_place_num = 2;
                }else if(this.cur_place == 'karaoke'){ // Karaoke
                    cur_place_num = 3;
                }else if(this.cur_place == 'audio_club'){ // Audio Club
                    cur_place_num = 4;
                }else if(this.cur_place == 'video_clips'){ // Video Clips
                    cur_place_num = 8;
                }else if(this.cur_place == 'ad'){
                    cur_place_num = 9;
                }else if(this.cur_place == 'media_browser'){
                    cur_place_num = 10;
                }else if (this.cur_place == 'epg_simple' || this.cur_place == 'epg'){ // TV archive
                    cur_place_num = 11;
                }else if (this.cur_place == 'records'){
                    cur_place_num = 12;
                }
            }
        }else{
            if (this.cur_place == 'city_info'){
                cur_place_num = 20;
            }else if(this.cur_place == 'anec_page'){
                cur_place_num = 21;
            }else if(this.cur_place == 'weather_page'){
                cur_place_num = 22;
            }else if(this.cur_place == 'game_page'){
                cur_place_num = 23;
            }else if(this.cur_place == 'horoscope_page'){
                cur_place_num = 24;
            }else if(this.cur_place == 'course_page'){
                cur_place_num = 25;
            }
        }

        return cur_place_num;
    };

    this.clock = {

        start : function(){
            _debug('clock.start()');

            if (this.t_clock){
                _debug('exit clock.start');
                return;
            }

            this.tick();

            var self = this;

            try{
                this.t_clock   = window.setInterval(function(){self.tick()}, 30000);
                this.t_clock_s = window.setInterval(function(){self.tick_s()}, 1000);
            }catch(e){
                _debug(e);
            }
        },

        stop : function(){
            _debug('clock.stop');

            _debug('self.t_clock', this.t_clock);

            var self = this;

            try{
                window.clearInterval(self.t_clock);
                window.clearInterval(self.t_clock_s);
            }catch(e){
                _debug(e);
            }
        },

        tick_s : function(){
            this.timestamp = Math.round(new Date().getTime() / 1000);
        },

        tick : function(){

            this.current_date = new Date();

            this.year  = this.current_date.getFullYear();

            this.month = this.current_date.getMonth();

            this.date  = this.current_date.getDate();

            this.day   = this.current_date.getDay();

            this.hours = this.current_date.getHours();

            if (this.hours > 11){
                this.ap_mark = 'PM';
            }else{
                this.ap_mark = 'AM';
            }

            this.ap_hours = this.hours % 12 || 12;

            this.minutes = this.current_date.getMinutes();
            if (this.minutes<10){
                this.minutes = '0'+this.minutes;
            }

            this.show();
        },

        show : function(){
            if (typeof(main_menu) != 'undefined' && main_menu && main_menu.time && main_menu.date && main_menu.on){
                main_menu.time.innerHTML = get_word('time_format').format(this.hours, this.minutes, this.ap_hours, this.ap_mark);
                main_menu.date.innerHTML = get_word('date_format').format(get_word('week_arr')[this.day], this.date, get_word('month_arr')[this.month], this.year);
            }

            if (stb.player && stb.player.info && stb.player.info.on && stb.player.info.clock){
                stb.player.info.clock.innerHTML = get_word('time_format').format(this.hours, this.minutes, this.ap_hours, this.ap_mark);
            }

            if (module && module.tv && module.tv.on && module.tv.clock_box){
                module.tv.clock_box.innerHTML = get_word('time_format').format(this.hours, this.minutes, this.ap_hours, this.ap_mark);
            }

            if (!stb.player.on || (stb.player.on && !stb.player.is_tv)){
                stb.setFrontPanel(this.hours + '' + this.minutes, true);
            }

            this.triggerCustomEventListener("tick", this);
        },

        convert_sec_to_human_time : function(sec){

            if (sec < 0 || isNaN(sec)){
                sec = 0;
            }

            var h = Math.floor(sec/3600);

            var m = Math.floor((sec - (h*3600)) / 60);

            var s = sec - (h*3600) - (m*60);

            var time = '';

            if(h){

                if (h<10){
                    h = '0'+h;
                }

                time += h+':';
            }

            if (m<10){
                m = '0'+m;
            }

            time += m+':';

            if (s<10){
                s = '0'+s;
            }

            time += s;

            return time;
        },

        convert_sec_to_human_hours : function(sec){

            var h = Math.floor(sec/3600);
            var m = Math.floor((sec - (h*3600)) / 60);
            var time = '';

            time += h+':';

            if (m<10){
                m = '0'+m;
            }

            time += m;

            return time;
        },

        convert_timestamp_to_human_time : function(timestamp){

            var date = new Date(parseInt(timestamp, 10)*1000);

            var hours = date.getHours();

            if (hours > 11){
                var ap_mark = 'PM';
            }else{
                ap_mark = 'AM';
            }

            var ap_hours = hours % 12 || 12;

            if (hours<10){
                hours = '0'+hours;
            }

            if (ap_hours<10){
                ap_hours = '0'+ap_hours;
            }

            var minutes = date.getMinutes();
            if (minutes<10){
                minutes = '0'+minutes;
            }

            return get_word('time_format').format(hours, minutes, ap_hours, ap_mark);
        },

        format_XX : function(value){
            if (value < 10){
                value = '0'+value;
            }
            return value;
        }
    }
};

var screensaver = {

    on : false,

    init : function(){
        //_debug('screensaver.init');

        if (typeof(gSTB) != "undefined" && gSTB.SetScreenSaverTime){
            gSTB.SetScreenSaverTime(0);
        }

        if (this.dom_obj){
            _debug('exit screensaver.init');
            return;
        }

        this.build();

        var self = this;

        keydown_observer.addCustomEventListener("keypress", function(event){
            //_debug('screensaver keypress', event);

            if (self.on){
                self.hide();
                self.restart_timer.call(self);
                return false;
            }

            self.restart_timer.call(self);
            return true;
        });

        this.restart_timer();

        stb.player.addCustomEventListener("onplay", function(event){
            if (self.on && stb.player.file_type != 'audio'){
                self.hide();
                self.restart_timer.call(self);
            }
        });

        stb.clock.addCustomEventListener("tick", function(date){
            if (self.on){
                self.clock.innerHTML = get_word('time_format').format(date.hours, date.minutes, date.ap_hours, date.ap_mark);
            }
        });
    },

    restart_timer : function(){
        //_debug('screensaver.restart_timer');

        var self = this;

        window.clearTimeout(this.activate_timer);

        if (stb.user['screensaver_delay'] > 0){
            this.activate_timer = window.setTimeout(function(){
                self.show.call(self);
            }, stb.user['screensaver_delay'] * 60000);
            //}, 30000);
        }
    },

    build : function(){
        //_debug('screensaver.build');

        this.dom_obj = create_block_element("screensaver");
        this.clock   = create_block_element("screensaver_clock", this.dom_obj);
        this.hide();
    },

    show : function(){
        _debug('screensaver.show');

        window.clearTimeout(this.activate_timer);

        _debug('stb.player.on', stb.player.on);

        var video_info = {};

        if (stb.GetVideoInfo){
            video_info = stb.GetVideoInfo();
            _debug('video_info', video_info);

            try{
                video_info = eval('('+video_info+')');
            }catch(e){
                _debug(e);
            }

            video_info = video_info || {};
        }

        _debug('video_info', video_info);

        if (stb.player.on && video_info.frameRate != 0){
            this.restart_timer();
            return;
        }

        this.dom_obj.show();
        this.on = true;

        this.clock.innerHTML = get_word('time_format').format(stb.clock.hours, stb.clock.minutes, stb.clock.ap_hours, stb.clock.ap_mark);

        this.move();
        var self = this;
        this.move_timer = window.setInterval(function(){self.move.call(self)}, 5000);
    },

    hide : function(){
        _debug('screensaver.hide');

        //stb.cur_layer && stb.cur_layer.dom_obj.show();
        this.dom_obj.hide();
        this.on = false;
        window.clearInterval(this.move_timer);
    },

    toggle : function(){
        _debug('screensaver.toggle');
        
        if (this.on){
            this.hide();
        }else{
            window.setTimeout(function(){screensaver.show()}, 500);
        }
    },

    move : function(){
        _debug('screensaver.start');

        var top  = Math.floor(Math.random() * (screen.height - this.clock.offsetHeight));
        var left = Math.floor(Math.random() * (screen.width  - this.clock.offsetWidth));
        _debug('top', top);
        _debug('left', left);

        this.clock.moveX(left);
        this.clock.moveY(top);
    }
};

var connection_problem = {

    on: true,

    init : function(){
        this.dom_obj = create_block_element("connection_problem_container");
        this.block_obj = create_block_element("connection_problem_block", this.dom_obj);
        this.block_obj.innerHTML = get_word('Connection problem');
        this.hide();
    },

    refresh_msg : function(){
        this.block_obj.innerHTML = get_word('Connection problem');
    },

    show : function(){
        _debug('connection_problem.show');

        _debug('stb.user.enable_connection_problem_indication', stb.user.enable_connection_problem_indication);

        if (stb.user.enable_connection_problem_indication == 1){
            this.dom_obj.show();
            this.on = true;
        }
    },

    hide : function(){
        _debug('connection_problem.hide');

        if (!this.on){
            return;
        }

        this.dom_obj.hide();
        this.on = false;
    }
};

var authentication_problem = {

    on: true,

    init : function(){
        this.dom_obj = create_block_element("authentication_problem_container");
        this.block_obj = create_block_element("authentication_problem_block", this.dom_obj);
        this.block_obj.innerHTML = get_word('Authentication problem');
        this.hide();
    },

    refresh_msg : function(){
        this.block_obj.innerHTML = get_word('Authentication problem');
    },

    show : function(){
        _debug('authentication_problem.show');

        this.dom_obj.show();
        this.on = true;

        if (stb.player && stb.player.on){
            stb.player.stop();
        }
    },

    hide : function(){
        _debug('authentication_problem.hide');

        if (!this.on){
            return;
        }

        this.dom_obj.hide();
        this.on = false;
    }

};

var Utf8 = {
    // public method for url encoding
    encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    },

    // public method for url decoding
    decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while ( i < utftext.length ) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }
};