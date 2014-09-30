package com.expedia.lodging.connectivity.model;

public class PartnerInfo {
	private String partnerID;
	
	private MessageAggregator RQInS;
	
	private MessageAggregator RQOutS;
	
	private MessageAggregator RSInS;
	
	private MessageAggregator RSOutS;
	
	private MessageAggregator RQInF;
	
	private MessageAggregator RQOutF;
	
	private MessageAggregator RSInF;
	
	private MessageAggregator RSOutF;
	
	public PartnerInfo(String partnerID){
		this.partnerID = partnerID;
		
	}

	public String getPartnerID() {
		return partnerID;
	}

	public void setPartnerID(String partnerID) {
		this.partnerID = partnerID;
	}

	public MessageAggregator getRQInS() {
		return RQInS;
	}

	public void setRQInS(MessageAggregator rQInS) {
		RQInS = rQInS;
	}

	public MessageAggregator getRQOutS() {
		return RQOutS;
	}

	public void setRQOutS(MessageAggregator rQOutS) {
		RQOutS = rQOutS;
	}

	public MessageAggregator getRSInS() {
		return RSInS;
	}

	public void setRSInS(MessageAggregator rSInS) {
		RSInS = rSInS;
	}

	public MessageAggregator getRSOutS() {
		return RSOutS;
	}

	public void setRSOutS(MessageAggregator rSOutS) {
		RSOutS = rSOutS;
	}

	public MessageAggregator getRQInF() {
		return RQInF;
	}

	public void setRQInF(MessageAggregator rQInF) {
		RQInF = rQInF;
	}

	public MessageAggregator getRQOutF() {
		return RQOutF;
	}

	public void setRQOutF(MessageAggregator rQOutF) {
		RQOutF = rQOutF;
	}

	public MessageAggregator getRSInF() {
		return RSInF;
	}

	public void setRSInF(MessageAggregator rSInF) {
		RSInF = rSInF;
	}

	public MessageAggregator getRSOutF() {
		return RSOutF;
	}

	public void setRSOutF(MessageAggregator rSOutF) {
		RSOutF = rSOutF;
	}
	
	


}
