package com.expedia.lodging.connectivity.model;

public class MessageAggregator {
	
	private String type;
	
	private String status;
	
	private int amount;
	
	private String sourceID;
	
	private String destinationID;
	
	private String parnterID;
	
	private String color;
	
	public MessageAggregator(String type,String status,int amount,String sourceID,String destinationID,String partnerID,String color){
		this.type = type;
		this.status = status;
		this.amount = amount;
		this.sourceID = sourceID;
		this.destinationID = destinationID;
		this.parnterID = partnerID;
		this.color = color;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getSourceID() {
		return sourceID;
	}

	public void setSourceID(String sourceID) {
		this.sourceID = sourceID;
	}

	public String getDestinationID() {
		return destinationID;
	}

	public void setDestinationID(String destinationID) {
		this.destinationID = destinationID;
	}

	public String getParnterID() {
		return parnterID;
	}

	public void setParnterID(String parnterID) {
		this.parnterID = parnterID;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}
	
	
	
}
