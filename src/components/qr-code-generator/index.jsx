import { useState } from 'react';
import QRCode from 'react-qr-code'

export default function QrGenerator() {

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode() {
        setQrCode(input);
        setInput('');
    }
    return (
        <div className="wrapper">
            <h1>QR Code Generator</h1>
            <div>
                <form>
                    <input type="text" name="qr-code" placeholder="Enter your value here" onChange={(e) => setInput(e.target.value)} value={input} autocomplete="off" />
                    <button disabled={input && input.trim() !== '' ? false : true} onClick={() => handleGenerateQrCode()}>Generate</button>
                </form>
                <div>
                    <QRCode
                        id="qr-code-value"
                        value={qrCode}
                        size={400}
                        bgColor="#fff"
                    />
                </div>
            </div>
        </div>
    )
}