var debugThrowError = false;
if (debugThrowError) {
	// throwing an error at any startup script will cause Travis to fail
	throw new Error();
	//
}

/*
ffmpeg -protocol_whitelist "file,http,https,tcp,tls" -i index2.m3u8 -c copy output.mkv




src="https://cdnapisec.kaltura.com/p/2082311/sp/208231100/playManifest/protocol/https/entryId/1_rqmmv3sn/format/applehttp/tags/web_hd/f/a.m3u8?clientTag=html5:v1.2.1&playSessionId=0984e17a-c200-720c-8468-fa23493260b0:23acb760-ce27-14c3-a5ff-66373bd9162a"

*/